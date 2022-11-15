<template>
  <BasicComponent/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import BasicComponent from '@/components/Basic.vue'

export default defineComponent({
  name: 'BasicPage',
  components: {
    BasicComponent,
  },
})
</script>

<style lang="scss" scoped></style>
