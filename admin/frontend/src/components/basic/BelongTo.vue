<template>
  <InputText id="belongTo" v-model="belongTo_" type="text" />
  <label for="belongTo">所属</label>
</template>

<script lang="ts">
  import { defineComponent, toRefs } from 'vue'

  export default defineComponent({
    name: 'BasicBelongToComponent',
    props: {
      belongTo: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const belongTo_ = toRefs(props).belongTo
      return { belongTo_ }
    },
  })
</script>

<style scoped lang="scss"></style>
