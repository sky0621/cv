<template>
  <HelloWorld msg="Made by Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import HelloWorld from '@/components/HelloWorld.vue'

  export default defineComponent({
    name: 'Home',
    components: {
      HelloWorld,
    },
  })
</script>

<style scoped lang="scss"></style>
