<template>{{ nickname_ }}</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'

  export default defineComponent({
    name: 'BasicNicknameComponent',
    props: {
      nickname: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const nickname_ = computed(() => {
        if (!props || !props.nickname) return []
        return props.nickname
      })

      return { nickname_ }
    },
  })
</script>

<style scoped lang="scss"></style>
