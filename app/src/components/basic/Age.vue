<template>{{ ageFromBirthday }} 歳（{{ now() }} 現在）</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { CalculationService } from '@/service/CalculationService'

  export default defineComponent({
    name: 'BasicAgeComponent',
    props: {
      year: {
        type: Number,
        default: 0,
      },
      month: {
        type: Number,
        default: 0,
      },
      day: {
        type: Number,
        default: 0,
      },
    },
    setup(props) {
      const cs = new CalculationService()

      const ageFromBirthday = computed(() => {
        return cs.ageFromBirthday(props.year, props.month, props.day)
      })

      const now = cs.now

      return { ageFromBirthday, now }
    },
  })
</script>

<style lang="scss" scoped></style>
