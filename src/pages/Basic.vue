<template>
  <Basic :basic="basic" />
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import Basic from '@/components/Basic.vue'
  import { BasicService } from '@/service/BasicService'

  export default defineComponent({
    name: 'BasicPage',
    components: {
      Basic,
    },
    setup() {
      onMounted(() => {
        basicService.value.getBasicInfo().then((data) => (basic.value = data))
      })

      const basic = ref()
      const basicService = ref(new BasicService())

      return { basic }
    },
  })
</script>

<style scoped lang="scss"></style>
