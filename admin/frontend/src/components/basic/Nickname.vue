<template>
  <InputText id="nickname" v-model="nickname_" type="text" />
  <label for="nickname">ニックネーム</label>
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
      const nickname_ = toRefs(props).nickname
      return { nickname_ }
    },
  })
</script>

<style scoped lang="scss"></style>
