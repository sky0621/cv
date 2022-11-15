<template>
  <div class="pl-3 pt-3">{{ from_ }} - {{ to_ }} ( {{ df }} )</div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {CalculationService} from '@/service/CalculationService'
import {Career} from '/@/types/career'

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
    if (!props || !props.careers || props.careers.length === 0)
      return {from: '?', to: '?'}
    const len = props.careers.length

    const cs = new CalculationService()

    /*
     * TODO: このあたり、適当にやりすぎ。直す。
     */
    const from_ = computed(() => {
      const firstCareer = props?.careers?.find((_, idx) => idx === len - 1)
      if (!firstCareer) return {from: '?', to: '?'}
      return cs.toStrYearMonth(firstCareer.from.year, firstCareer.from.month)
    })
    const to_ = computed(() => {
      const latestCareer = props?.careers?.find((_, idx) => idx === 0)
      if (!latestCareer) return {from: '?', to: '?'}
      return cs.toStrYearMonth(latestCareer.to.year, latestCareer.to.month)
    })
    const df = computed(() => {
      const firstCareer = props?.careers?.find((_, idx) => idx === len - 1)
      if (!firstCareer) return '?'
      const latestCareer = props?.careers?.find((_, idx) => idx === 0)
      if (!latestCareer) return '?'
      return cs.differenceStrInMonths(
          new Date(`${latestCareer.to?.year}-${latestCareer.to?.month}-1`),
          new Date(`${firstCareer.from?.year}-${firstCareer.from?.month}-1`)
      )
    })

    return {from_, to_, df}
  },
})
</script>

<style lang="scss" scoped></style>
