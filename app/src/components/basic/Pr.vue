<template>
  <Textarea
      :auto-resize="true"
      :value="pr_"
      class="flex px-5 py-5"
      disabled
      style="opacity: 1; width: 100%"
  />
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

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

    return {pr_}
  },
})
</script>

<style lang="scss" scoped></style>
