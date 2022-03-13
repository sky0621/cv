<template>
  <DataView :value="likes_" layout="grid">
    <template #grid="slot">
      <Chip class="p-mr-3 p-mb-2" :label="slot.data.name" />
    </template>
  </DataView>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue'
  import { Like } from '@/types/basic'

  export default defineComponent({
    name: 'BasicLikeComponent',
    props: {
      likes: {
        type: Array as PropType<Like[]>,
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
