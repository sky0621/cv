<template>
  <Career />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Career from '@/components/Career.vue'

  export default defineComponent({
    name: 'CareerPage',
    components: {
      Career,
    },
  })
</script>

<style scoped lang="scss"></style>
