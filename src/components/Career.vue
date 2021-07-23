<template>
  <div>{{ careerGroups_ }}</div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { CareerGroup } from '@/types/career'

  export default defineComponent({
    name: 'CareerComponent',
    props: {
      careerGroups: {
        type: Array as PropType<CareerGroup[]>,
        default: undefined,
      },
    },
    setup(props) {
      const careerGroups_ = computed(() => {
        if (!props || !props.careerGroups) return []
        return props.careerGroups
      })
      return { careerGroups_ }
    },
  })
</script>

<style scoped lang="scss"></style>
