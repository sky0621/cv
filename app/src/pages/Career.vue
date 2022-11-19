<script lang="ts">
import {defineComponent} from 'vue'
import CareerGroupComponent from '@/components/CareerGroup.vue'

export default defineComponent({
  name: 'CareerPage',
  components: {
    CareerGroupComponent,
  },
})
</script>

<template>
  <CareerGroupComponent/>
</template>

<style lang="scss" scoped></style>
