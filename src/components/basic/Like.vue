<template>
  <DataView :value="likes_" layout="grid">
    <template #grid="slot">
      <div class="p-mr-3 p-mb-2">{{ slot.data }}</div>
    </template>
  </DataView>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'

  export default defineComponent({
    name: 'BasicLikeComponent',
    props: {
      likes: {
        type: Array as PropType<string[]>,
        default: () => [],
      },
    },
    setup(props) {
      const likes_ = computed(() => {
        if (!props || !props.likes) return []
        return props.likes
      })

      return { likes_ }
    },
  })
</script>

<style scoped lang="scss"></style>
