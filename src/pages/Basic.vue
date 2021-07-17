<template>
  <Basic />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Basic from '../components/Basic.vue'

  export default defineComponent({
    name: 'BasicPage',
    components: {
      Basic,
    },
  })
</script>

<style scoped lang="scss"></style>
