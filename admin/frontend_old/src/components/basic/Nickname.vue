<template>
  <InputText v-model="nickname_" />
</template>

<script lang="ts">
  import { defineComponent, toRefs } from 'vue'

  export default defineComponent({
    name: 'BasicNicknameComponent',
    props: {
      nickname: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const { nickname_ } = toRefs(props)
      return { nickname_ }
    },
  })
</script>

<style scoped lang="scss"></style>
