<template>{{ ageFromBirthday }} 歳（{{ now() }} 現在）</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { CalculationService } from '@/service/CalculationService'

  export default defineComponent({
    name: 'BasicAgeComponent',
    props: {
      birthday: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const cs = new CalculationService()

      const ageFromBirthday = computed(() => {
        return cs.ageFromBirthday(props.birthday)
      })

      const now = cs.now

      return { ageFromBirthday, now }
    },
  })
</script>

<style scoped lang="scss"></style>
