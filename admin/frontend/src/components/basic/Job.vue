<template>
  <InputText id="job" v-model="job_" type="text" />
  <label for="job">職業</label>
</template>

<script lang="ts">
  import { defineComponent, toRefs } from 'vue'

  export default defineComponent({
    name: 'BasicJobComponent',
    props: {
      job: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const job_ = toRefs(props).job
      return { job_ }
    },
  })
</script>

<style scoped lang="scss"></style>
