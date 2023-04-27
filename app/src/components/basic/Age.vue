<script lang="ts" setup>
  import { computed, PropType } from 'vue'
  import { CalculationService } from '@/service/CalculationService'
  import { Birthday } from '@/types/attribute'

  const props = defineProps({
    birthday: Object as PropType<Birthday>,
  })

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
</script>

<template>{{ ageFromBirthday }} 歳（{{ now() }} 現在）</template>