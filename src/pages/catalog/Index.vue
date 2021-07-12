<template>
  <div>
    <router-link to="/catalog/button"> Button </router-link>
  </div>
  <div>
    <router-link to="/catalog/grid"> Grid </router-link>
  </div>
  <div>
    <router-link to="/catalog/menubar"> Menubar </router-link>
  </div>
  <div>
    <router-link to="/catalog/avatar"> Avatar </router-link>
  </div>
  <div>
    <router-link to="/catalog/dtresponsive">
      DataTable: Responsive
    </router-link>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'CatalogIndex',
  })
</script>

<style scoped lang="scss"></style>
