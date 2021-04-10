<template>
  <Form class="max-w-screen-sm" @submit="onSubmit" :validation-schema="schema">
    <Alert v-if="errorMsg" type="error" title="Error" :message="errorMsg" />
    <Alert
      v-if="successMsg"
      type="success"
      title="Success"
      :message="successMsg"
    />
    <div class="field">
      <label for="name">Name</label>
      <Field name="name" type="text" />
      <ErrorMessage class="error" name="name" />
    </div>

    <div class="field">
      <label for="email">Email</label>
      <Field name="email" type="email" />
      <ErrorMessage class="error" name="email" />
    </div>

    <div class="field">
      <label for="message">Message</label>
      <text-area-input name="message" rows="5" />
      <ErrorMessage class="error" name="message" />
    </div>

    <button
      class="mt-2 text-gray-900 btn bg-cyan-400 hover:bg-lime-400"
      :class="loading && 'bg-lime-600 text-lime-50 cursor-not-allowed'"
      :disabled="loading"
    >
      <span class="inline-flex items-center" v-if="loading">
        <svg
          class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span class="animate-pulse">Sending...</span>
      </span>
      <span class="animate-pulse" v-else-if="errorMsg">Try again</span>
      <span v-else>Send Message</span>
    </button>
  </Form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Form, Field, ErrorMessage, FormActions } from 'vee-validate'
import { object, string } from 'yup'
import axios from 'axios'

import Alert from './Alert.vue'
import TextAreaInput from './TextAreaInput.vue'

export default defineComponent({
  name: 'ContactForm',
  components: {
    Form,
    Field,
    ErrorMessage,
    TextAreaInput,
    Alert,
  },
  setup() {
    const schema = object({
      name: string().required('Name is required').min(2),
      email: string()
        .required('Email address is required')
        .email('Invalid email address format'),
      message: string()
        .required('Message is required')
        .min(5, 'Message must be at least 5 characters'),
    })

    return {
      schema,
      loading: ref(false),
      successMsg: ref(''),
      errorMsg: ref(''),
    }
  },
  methods: {
    async onSubmit(values: Object, { resetForm }: FormActions<any>) {
      try {
        // start loading spinner
        this.loading = true
        this.errorMsg = ''
        const endpoint = import.meta.env.VITE_USEBASIN_ENDPOINT as string
        const response = await axios.post(endpoint, values)
        if (response.status === 200) {
          // reset form
          resetForm()
          // show success message
          this.successMsg = "Thanks for reaching out. I'll be in touch soon🙂"
          this.loading = false
        }
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          this.errorMsg =
            'The request was made and the server responded with a status code' +
            error.response.status +
            error.response.data
          console.log(error.response.data)
        } else if (error.request) {
          // The request was made but no response was received
          this.errorMsg = 'The request was made but no response was received'
          // console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          this.errorMsg = error.message
          console.log('Error', error.message)
        }
        this.loading = false
      }
    },
  },
})
</script>

<style scoped>
.field {
  @apply my-2;
}

label {
  @apply block text-sm font-semibold;
}

input[type='text'],
input[type='email'],
textarea {
  @apply w-full px-2 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none;
}

input[type='checkbox'] {
  @apply w-4 h-4 border-gray-300 rounded focus:ring-cyan-500 text-cyan-600;
}

.field .error {
  @apply text-sm text-red-500;
}
</style>
