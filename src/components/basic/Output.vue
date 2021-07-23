<template>
  <DataView :value="outputs_" layout="grid">
    <template #grid="slotProps">
      <div class="p-mr-3 p-mb-2">
        <i :class="slotProps.data.icon"></i
        ><a :href="slotProps.data.url" target="_blank" class="p-ml-1">{{
          slotProps.data.name
        }}</a>
      </div>
    </template>
  </DataView>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { Output } from '@/types/basic'

  export default defineComponent({
    name: 'BasicOutputComponent',
    props: {
      outputs: {
        type: Array as PropType<Output[]>,
        required: true,
        default: undefined,
      },
    },
    setup(props) {
      const outputs_ = computed(() => {
        if (!props || !props.outputs) return []
        return props.outputs
      })

      return { outputs_ }
    },
  })
</script>

<style scoped lang="scss"></style>
