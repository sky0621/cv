<template>
  <template v-for="c in careers_" :key="c.id">
    <div>{{ c.from }} - {{ c.to }} {{ c.title }}</div>
    <Divider />
    <div>{{ c.summary }}</div>
  </template>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { Career } from '@/types/career'

  export default defineComponent({
    name: 'CareerComponent',
    props: {
      careers: {
        type: Array as PropType<Career[]>,
        default: undefined,
      },
    },
    setup(props) {
      const careers_ = computed(() => {
        if (!props || !props.careers) return []
        return props.careers
      })
      return { careers_ }
    },
  })
</script>

<style scoped lang="scss"></style>
