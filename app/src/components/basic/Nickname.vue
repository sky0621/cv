<template>{{ nickname_ }}</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

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
      if (!props || !props.nickname) return undefined
      return props.nickname
    })

    return {nickname_}
  },
})
</script>

<style lang="scss" scoped></style>
