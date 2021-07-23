<template>
  <template v-for="g in careerGroups_" :key="g.id">
    <Panel :toggleable="true">
      <template #header>
        {{ g.title }}
      </template>
      <CareerComponent :careers="g.careers" />
    </Panel>
  </template>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { CareerGroup } from '@/types/career'
  import CareerComponent from '@/components/career/Career.vue'

  export default defineComponent({
    name: 'CareerGroupComponent',
    components: {
      CareerComponent,
    },
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
