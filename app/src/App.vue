<script lang="ts" setup>
import {ref} from 'vue'

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
</script>

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
            <ProgressSpinner aria-label="ProgressSpinner"/>
          </template>
        </Suspense>
      </KeepAlive>
    </template>
  </RouterView>
</template>

<style lang="scss">
html, body {
  background-color: #fcfcfc;
  font-family: "ヒラギノ角ゴ ProN W3", HiraKakuProN-W3, 游ゴシック, "Yu Gothic", メイリオ, Meiryo, Verdana, Helvetica, Arial, sans-serif;
  font-size: 16px;
  @media only screen and (min-width: 400px) {
    margin-left: -6px;
    padding-left: 10px;
  }
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
