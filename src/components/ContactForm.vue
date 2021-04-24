<template>
  <div>
    <Alert v-if="errorMsg" type="error" title="Error" :message="errorMsg" />
    <Alert
      v-if="successMsg"
      type="success"
      title="Success"
      :message="successMsg"
    />
  </div>
  <form class="max-w-screen-sm" @submit="onSubmit">
    <div class="field">
      <label for="name">Name</label>
      <input type="text" name="name" v-model="name" :disabled="isSubmitting" />
      <span class="error">{{ nameError }} </span>
    </div>

    <div class="field">
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        v-model="email"
        :disabled="isSubmitting"
      />
      <span class="error">{{ emailError }} </span>
    </div>

    <div class="field">
      <label for="message">Message</label>
      <textarea
        name="message"
        :rows="5"
        v-model="message"
        :disabled="isSubmitting"
      />
      <span class="error">{{ messageError }} </span>
    </div>

    <button
      class="mt-2 text-gray-900 btn bg-cyan-400 hover:bg-lime-400"
      :disabled="isSubmitting"
    >
      <span class="flex items-center" v-if="isSubmitting">
        <i-codicon:loading class="mr-2 animate-spin" />
        <span>Sending...</span>
      </span>
      <span class="animate-pulse" v-else-if="errorMsg">Try again</span>
      <span v-else class="flex"
        ><i-carbon-send-filled class="w-6 h-6 mr-2" /> Send Message</span
      >
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
  @apply w-full px-2 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-75;
}

input[type='checkbox'] {
  @apply w-4 h-4 border-gray-300 rounded focus:ring-cyan-500 text-cyan-600;
}

.field .error {
  @apply text-sm text-red-500;
}
</style>
