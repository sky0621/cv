<template>
  <div>Basic2</div>
  <template v-for="b in basics_" :key="b.id">
    <div>{{ b }}</div>
  </template>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { Basic } from '@/types/basic'

  export default defineComponent({
    name: 'BasicListComponent',
    props: {
      basics: {
        type: Array as PropType<Basic[]>,
        default: undefined,
      },
    },
    setup(props) {
      const basics_ = computed(() => {
        if (!props || !props.basics) return []
        return props.basics
      })
      return { basics_ }
    },
  })
</script>

<style scoped lang="scss"></style>
