<template>
  <CareerComponent :career-groups="careerGroups" />
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import CareerComponent from '@/components/Career.vue'
  import { CareerService } from '@/service/CareerService'

  export default defineComponent({
    name: 'CareerPage',
    components: {
      CareerComponent,
    },
    setup() {
      const careerGroups = ref()

      onMounted(async () => {
        try {
          careerGroups.value = await new CareerService().getCareerGroups()
        } catch (e) {
          console.error(e)
        }
      })

      return { careerGroups }
    },
  })
</script>

<style scoped lang="scss"></style>
