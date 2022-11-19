<script lang="ts" setup>
import {computed} from 'vue'

const props = defineProps({pr: String})

const pr_ = computed(() => {
  if (!props || !props.pr) return undefined
  return props.pr
})
</script>

<template>
  <Textarea
      :auto-resize="true"
      :value="pr_"
      class="flex px-5 py-5"
      disabled
      style="opacity: 1; width: 100%"
  />
</template>
