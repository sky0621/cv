<template>
  <div class="p-grid">
    <div class="p-col">
      <TabMenu :model="items" />
    </div>
  </div>
  <router-view />
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'App',
    setup() {
      const items = ref([
        {
          label: 'Home',
          icon: 'pi pi-fw pi-id-card',
          to: '/',
        },
      ])
      return { items }
    },
  })
</script>

<style lang="scss">
  html {
    font-size: 16px;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
