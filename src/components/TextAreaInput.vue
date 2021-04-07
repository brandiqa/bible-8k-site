<template>
  <textarea
    :name="name"
    :id="name"
    :value="inputValue"
    @input="handleChange"
    @blur="handleBlur"
  />
</template>

<script>
import { useField } from 'vee-validate'

export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // we don't provide any rules here because we are using form-level validation
    // https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, undefined, {
      initialValue: props.value,
    })

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    }
  },
}
</script>
