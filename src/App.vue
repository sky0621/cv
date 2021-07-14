<template>
  <TabMenu :model="items" />
  <router-view />
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'App',
    setup() {
      const items = ref([
        {
          label: 'Basic',
          icon: 'pi pi-fw pi-home',
          to: '/',
        },
        {
          label: 'Skill',
          icon: 'pi pi-fw pi-desktop',
          to: '/skill',
        },
        {
          label: 'Career',
          icon: 'pi pi-fw pi-book',
          to: '/career',
        },
      ])
      return { items }
    },
  })
</script>

<style lang="scss">
  html {
    font-size: 26px;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
