<template>
  <InputText id="birthday" v-model="birthday_" type="text" />
  <label for="birthday">誕生日</label>
</template>

<script lang="ts">
  import { defineComponent, toRefs } from 'vue'

  export default defineComponent({
    name: 'BasicBirthdayComponent',
    props: {
      birthday: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const birthday_ = toRefs(props).birthday
      return { birthday_ }
    },
  })
</script>

<style scoped lang="scss"></style>
