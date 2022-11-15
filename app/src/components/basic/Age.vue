<template>{{ ageFromBirthday }} 歳（{{ now() }} 現在）</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {CalculationService} from '@/service/CalculationService'
import {Birthday} from '/@/types/attribute'

export default defineComponent({
  name: 'BasicAgeComponent',
  props: {
    birthday: {
      type: Object as PropType<Birthday>,
      default: () => {
        return {year: 1900, month: 0, day: 0}
      },
    },
  },
  setup(props) {
    const cs = new CalculationService()

    const ageFromBirthday = computed(() => {
      if (!props.birthday) return undefined
      return cs.ageFromBirthday(
          props.birthday.year,
          props.birthday.month,
          props.birthday.day
      )
    })

    const now = cs.now

    return {ageFromBirthday, now}
  },
})
</script>

<style lang="scss" scoped></style>
