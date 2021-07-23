<template>
  <DataView :value="outputs_" layout="grid">
    <template #grid="slot">
      <div class="p-mr-3 p-mb-2">
        <i :class="slot.data.icon"></i
        ><a :href="slot.data.url" target="_blank" class="p-ml-1">{{
          slot.data.name
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
        default: () => [],
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
