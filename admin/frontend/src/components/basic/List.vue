<template>
  <div>Basic</div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'

  export default defineComponent({
    name: 'BasicListComponent',
    setup(props) {
      const basics = computed(() => {
        if (!props || !props.basic) return []
        return [props.basic]
      })
      return { basics }
    },
  })
</script>

<style scoped lang="scss"></style>
