<template>
  <Form class="max-w-screen-sm" @submit="onSubmit" :validation-schema="schema">
    <Alert type="error" title="Error" message="Something went wrong" />
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

    <button class="mt-2 text-gray-900 btn bg-cyan-400 hover:bg-lime-400">
      Send Message
    </button>
  </Form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
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
  data() {
    const schema = yup.object({
      name: yup.string().required('Name is required').min(2),
      email: yup
        .string()
        .required('Email address is required')
        .email('Invalid email address format'),
      message: yup
        .string()
        .required('Message is required')
        .min(5, 'Message must be at least 5 characters'),
    })

    return {
      schema,
    }
  },
  methods: {
    async onSubmit(values: Object) {
      console.log(values)
      try {
        const endpoint = import.meta.env.VITE_USEBASIN_ENDPOINT as string
        const response = await axios.post(endpoint, values)
        console.log(response.statusText)
        // reset form
        // show success message
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
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
