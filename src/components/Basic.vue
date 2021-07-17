<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'Basic',
    setup() {
      let msg = ref<string>('Ppp')
      return {
        msg,
      }
    },
  })
</script>

<style scoped lang="scss"></style>
