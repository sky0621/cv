<script lang="ts" setup>
import {computed, PropType} from 'vue'

const props = defineProps({description: Array as PropType<String[]>})

const descriptions_ = computed(() => {
  if (!props || !props.description) return ''
  return props.description
})
</script>

<template>
  <template v-for="(description, tIdx) in descriptions_" :key="tIdx">
    {{ description }}<br/>
  </template>
</template>
