<template>
  <form class="max-w-screen-sm" @submit="onSubmit">
    <Alert v-if="errorMsg" type="error" title="Error" :message="errorMsg" />
    <Alert
      v-if="successMsg"
      type="success"
      title="Success"
      :message="successMsg"
    />
    <div class="field">
      <label for="name">Name</label>
      <input type="text" name="name" v-model="name" />
      <span class="error">{{ nameError }} </span>
    </div>

    <div class="field">
      <label for="email">Email</label>
      <input type="email" name="email" v-model="email" />
      <span class="error">{{ emailError }} </span>
    </div>

    <div class="field">
      <label for="message">Message</label>
      <textarea name="message" :rows="5" v-model="message" />
      <span class="error">{{ messageError }} </span>
    </div>

    <button
      class="mt-2 text-gray-900 btn bg-cyan-400 hover:bg-lime-400"
      :disabled="isSubmitting"
    >
      <span class="inline-flex items-center" v-if="isSubmitting">
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
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import { object, string } from 'yup'
import axios from 'axios'

import Alert from './Alert.vue'

export default defineComponent({
  name: 'ContactForm',
  components: {
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

    const { handleSubmit, isSubmitting, resetForm } = useForm({
      validationSchema: schema,
    })

    const { value: name, errorMessage: nameError } = useField('name')
    const { value: email, errorMessage: emailError } = useField('email')
    const { value: message, errorMessage: messageError } = useField('message')

    const successMsg = ref('')
    const errorMsg = ref('')

    const onSubmit = handleSubmit(async (values) => {
      try {
        // start loading spinner
        errorMsg.value = ''
        const endpoint = import.meta.env.VITE_USEBASIN_ENDPOINT as string
        const response = await axios.post(endpoint, values)
        if (response.status === 200) {
          resetForm()
          successMsg.value = "Thanks for reaching out. I'll be in touch soon🙂"
        }
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          errorMsg.value =
            'The request was made and the server responded with a status code' +
            error.response.status +
            error.response.data
          console.log(error.response.data)
        } else if (error.request) {
          // The request was made but no response was received
          errorMsg.value = 'The request was made but no response was received'
          // console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          errorMsg.value = error.message
          console.log('Error', error.message)
        }
      }
    })

    return {
      onSubmit,
      isSubmitting,
      name,
      nameError,
      email,
      emailError,
      message,
      messageError,
      successMsg,
      errorMsg,
    }
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
