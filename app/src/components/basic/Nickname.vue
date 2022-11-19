<script lang="ts" setup>
import {computed} from 'vue'

const props = defineProps({nickname: String})

const nickname_ = computed(() => {
  if (!props || !props.nickname) return undefined
  return props.nickname
})
</script>

<template>{{ nickname_ }}</template>
