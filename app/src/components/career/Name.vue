<script lang="ts" setup>
import {computed} from 'vue'

const props = defineProps({name: String})

const name_ = computed(() => {
  if (!props || !props.name) return ''
  return props.name
})
</script>

<template>{{ name_ }}</template>
