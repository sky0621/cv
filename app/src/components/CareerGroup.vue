<template>
  <div class="card">
    <Timeline
      :value="careerGroups_"
      align="alternate"
      class="customized-timeline"
    >
      <template #opposite="slot">
        <div class="p-text-secondary" style="min-width: 140px">
          <CareerGroupPeriodComponent :careers="slot.item.careers" />
        </div>
      </template>
      <template #content="slot">
        <Panel :collapsed="true" :toggleable="true" class="mb-4">
          <template #header>
            {{ slot.item.label }}
          </template>
          <CareersComponent :careers="slot.item.careers" />
        </Panel>
      </template>
    </Timeline>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue'
  import { CareerGroup } from '@/types/career'
  import CareerGroupPeriodComponent from '@/components/career/GroupPeriod.vue'
  import CareersComponent from '@/components/career/Careers.vue'

  export default defineComponent({
    name: 'CareerGroupComponent',
    components: {
      CareerGroupPeriodComponent,
      CareersComponent,
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

<style lang="scss" scoped>
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
