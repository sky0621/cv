<template>
  <div class="card">
    <Timeline
      :value="careerGroups_"
      align="alternate"
      class="customized-timeline"
    >
      <template #opposite="slot">
        <div class="p-text-secondary">
          {{ slot.item.period.from }} ~ {{ slot.item.period.to }}
        </div>
      </template>
      <template #content="slot">
        <Panel :toggleable="true" :collapsed="true" class="p-mb-4">
          <template #header>
            {{ slot.item.title }}
          </template>
          <CareerComponent :careers="slot.item.careers" />
        </Panel>
      </template>
    </Timeline>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue'
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

<style scoped lang="scss">
  @media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
      .p-timeline-event:nth-child(even) {
        flex-direction: row !important;

        .p-timeline-event-content {
          text-align: left !important;
        }
      }

      .p-timeline-event-opposite {
        flex: 0;
      }

      .p-card {
        margin-top: 1rem;
      }
    }
  }
</style>
