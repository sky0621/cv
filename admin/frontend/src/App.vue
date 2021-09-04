<template>
  <div class="p-grid">
    <div class="p-col-3 p-sm-2 p-md-1">
      <SpeedDial
        :model="items"
        :radius="110"
        direction="down-right"
        type="quarter-circle"
      />
    </div>
    <div class="p-col-9 p-sm-10 p-md-11 p-text-left">
      <router-view />
    </div>
  </div>
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
          command: () => {
            window.location = '/basic'
          },
        },
        {
          label: 'Note',
          icon: 'pi pi-fw pi-exclamation-circle',
          command: () => {
            window.location = '/note'
          },
        },
        {
          label: 'Skill',
          icon: 'pi pi-fw pi-desktop',
          command: () => {
            window.location = '/skill'
          },
        },
        {
          label: 'Career',
          icon: 'pi pi-fw pi-book',
          command: () => {
            window.location = '/career'
          },
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
