<template>
  <div class="text-500 py-3 w-6 md:w-2 font-medium">PR</div>
  <Textarea
    :auto-resize="true"
    :value="pr_"
    class="flex px-5 py-5"
    disabled
    style="opacity: 1; width: 100%"
  />
</template>

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
