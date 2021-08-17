<template>
  <div>
    <label>nickname</label>
    <InputText v-model="nickname" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed, ref } from 'vue'
  import { Basic } from '@/types/basic'

  export default defineComponent({
    name: 'BasicEditComponent',
    props: {
      basic: {
        type: Object as PropType<Basic>,
        default: undefined,
      },
    },
    setup(props) {
      let id = ref()
      let nickname = ref()
      let birthday = ref()
      let job = ref()
      let belongTo = ref()

      const basic_ = computed(() => {
        if (!props || !props.basic) return {}
        return props.basic
      })

      id = basic_.value.id
      nickname = basic_.value.nickname
      birthday = basic_.value.birthday
      job = basic_.value.job
      belongTo = basic_.value.belongTo
      console.log(nickname)

      return { id, nickname, birthday, job, belongTo }
    },
  })
</script>

<style scoped lang="scss"></style>
