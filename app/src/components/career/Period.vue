<template>
  <div class="pl-3 pt-3">{{ from_ }} - {{ to_ }} ( {{ df }} )</div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {DateYM} from '@/types/common'
import {CalculationService} from '@/service/CalculationService'

export default defineComponent({
  name: 'CareerPeriodComponent',
  components: {
    CalculationService,
  },
  props: {
    from: {
      type: Object as PropType<DateYM>,
      default: undefined,
    },
    to: {
      type: Object as PropType<DateYM>,
      default: undefined,
    },
  },
  setup(props) {
    if (!props) return {from_: '?', to_: '?', df: '?'}

    const cs = new CalculationService()

    const from_ = computed(() => {
      if (!props.from) return '?'
      return cs.toStrYearMonth(props.from.year, props.from.month)
    })
    const to_ = computed(() => {
      if (!props.to) return '?'
      return cs.toStrYearMonth(props.to.year, props.to.month)
    })
    const df = computed(() => {
      return cs.differenceStrInMonths(
          new Date(`${props.to?.year}-${props.to?.month}-1`),
          new Date(`${props.from?.year}-${props.from?.month}-1`)
      )
    })

    return {from_, to_, df}
  },
})
</script>

<style lang="scss" scoped></style>
