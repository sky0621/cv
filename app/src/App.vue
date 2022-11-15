<template>
  <header class="grid">
    <div class="col">
      <TabMenu :model="items"/>
    </div>
  </header>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <KeepAlive>
        <Suspense>
          <!-- main content -->
          <component :is="Component"></component>
          <!-- loading state -->
          <template #fallback>
            Loading.....
          </template>
        </Suspense>
      </KeepAlive>
    </template>
  </RouterView>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

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
        label: 'Career',
        icon: 'pi pi-fw pi-book',
        to: '/career',
      },
      {
        label: 'Skill',
        icon: 'pi pi-fw pi-desktop',
        to: '/skill',
      },
      {
        label: 'Note',
        icon: 'pi pi-fw pi-exclamation-circle',
        to: '/note',
      },
    ])
    return {items}
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
}
</style>
