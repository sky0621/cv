<script lang="ts" setup>
  import { computed, PropType } from 'vue'
  import { CalculationService } from '@/service/CalculationService'
  import { Career } from '@/types/career'

  const props = defineProps({ careers: Array as PropType<Career[]> })

  const len = props?.careers ? props.careers.length : 0

  const cs = new CalculationService()

  const from_ = computed(() => {
    const firstCareer = props?.careers?.find((_, idx) => idx === len - 1)
    if (!firstCareer) return { from: '?', to: '?' }
    return cs.toStrYearMonth(firstCareer.from.year, firstCareer.from.month)
  })

  const to_ = computed(() => {
    const latestCareer = props?.careers?.find((_, idx) => idx === 0)
    if (!latestCareer) return { from: '?', to: '?' }
    return cs.toStrYearMonth(latestCareer.to.year, latestCareer.to.month)
  })

  const df = computed(() => {
    const firstCareer = props?.careers?.find((_, idx) => idx === len - 1)
    if (!firstCareer) return '?'
    const latestCareer = props?.careers?.find((_, idx) => idx === 0)
    if (!latestCareer) return '?'
    return cs.differenceStrInMonths(
      new Date(
        `${latestCareer.to?.year}-${latestCareer.to?.month}-1`.replace(
          /-/g,
          '/'
        )
      ),
      new Date(
        `${firstCareer.from?.year}-${firstCareer.from?.month}-1`.replace(
          /-/g,
          '/'
        )
      )
    )
  })
</script>

<template>
  <div class="pl-3 pt-3">{{ from_ }} - {{ to_ }} ( {{ df }} )</div>
</template>