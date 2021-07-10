<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite !!! !!!" />
  <div>A <i class="pi pi-check"></i></div>
  <div>B <i class="pi pi-times"></i></div>
  <div>C <i class="pi pi-spin pi-spinner" style="fontSize: 2rem"></i></div>
  <div><Button label="SUBMIT" /></div>
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

<style scoped></style>
