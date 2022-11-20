<script lang="ts" setup>
import {computed} from 'vue'

const props = defineProps({pr: String})

const pr_ = computed(() => {
  if (!props || !props.pr) return ''
  return props.pr
})
</script>

<template>
  <Textarea
      :auto-resize="true"
      :value="pr_"
      class="flex sm:px-2 md:px-4 lg:px-6 xl:px-6 sm:py-2 md:py-4 lg:py-6 xl:py-6"
      disabled
      style="opacity: 1; width: 100%"
  />
</template>
