<template>{{ name_ }}</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'CareerNameComponent',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const name_ = computed(() => {
      if (!props || !props.name) return undefined
      return props.name
    })

    return {name_}
  },
})
</script>

<style lang="scss" scoped></style>
