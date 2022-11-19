<script lang="ts" setup>
import {computed, PropType} from 'vue'
import {DateYM} from '@/types/common'
import {CalculationService} from '@/service/CalculationService'

const props = defineProps({
  from: Object as PropType<DateYM>,
  to: Object as PropType<DateYM>,
})

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
</script>

<template>
  <div class="pl-2 pt-1 pb-2">{{ from_ }} - {{ to_ }} ( {{ df }} )</div>
</template>
