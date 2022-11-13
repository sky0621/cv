<template>
  <div class="pl-3 pt-3">{{ from }} - {{ to }}</div>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue'
  import { CalculationService } from '@/service/CalculationService';
  import { Career } from '/@/types/career';

  export default defineComponent({
    name: 'CareerGroupPeriodComponent',
    components: {
      CalculationService,
    },
    props: {
      careers: {
        type: Array as PropType<Career[]>,
        default: undefined,
      },
    },
    setup(props) {
      if (!props || !props.careers || props.careers.length === 0) return { from: '?', to: '?' }
      const len = props.careers.length

      const cs = new CalculationService()

      const from = computed(() => {
        const firstCareer = props?.careers?.find((_, idx) => idx === len-1)
        if (!firstCareer) return { from: '?', to: '?' }
        return cs.toStrYearMonth(firstCareer.from.year, firstCareer.from.month)
      })
      const to = computed(() => {
        const latestCareer = props?.careers?.find((_, idx) => idx === 0)
        if (!latestCareer) return { from: '?', to: '?' }
        return cs.toStrYearMonth(latestCareer.to.year, latestCareer.to.month)
      })

      return { from, to }
    },
  })
</script>

<style lang="scss" scoped></style>
