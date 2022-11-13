<template>
  <div class="pl-3 pt-3">{{ from }} - {{ to }}</div>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue'
  import { DateYM } from "@/types/common";
  import { CalculationService } from '@/service/CalculationService';

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
      if (!props) return { from: '?', to: '?' }

      const cs = new CalculationService()

      const from = computed(() => {
        if (!props.from) return '?'
        return cs.toStrYearMonth(props.from.year, props.from.month)
      })
      const to = computed(() => {
        if (!props.to) return '?'
        return cs.toStrYearMonth(props.to.year, props.to.month)
      })

      return { from, to }
    },
  })
</script>

<style lang="scss" scoped></style>
