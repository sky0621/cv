<template>{{ pr_ }}</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'

  export default defineComponent({
    name: 'BasicPrComponent',
    props: {
      pr: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const pr_ = computed(() => {
        if (!props || !props.pr) return undefined
        return props.pr
      })

      return { pr_ }
    },
  })
</script>

<style lang="scss" scoped></style>
