<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite !!!" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'Home',
  // App.vueのものを貼り付け
  components: {
    HelloWorld
  }
});
</script>

<style scoped></style>
