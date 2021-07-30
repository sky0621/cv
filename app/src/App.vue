<template>
  <div class="p-grid">
    <div class="p-col-fixed" style="width: 100px">
      <Avatar image="./avatar.png" size="xlarge"></Avatar>
    </div>
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
          label: 'Basic',
          icon: 'pi pi-fw pi-id-card',
          to: '/',
        },
        {
          label: 'Note',
          icon: 'pi pi-fw pi-exclamation-circle',
          to: '/note',
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
