<template>
  <BasicComponent :basic="basic" />
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import BasicComponent from '@/components/Basic.vue'
  import { BasicService } from '@/service/BasicService'

  export default defineComponent({
    name: 'BasicPage',
    components: {
      BasicComponent,
    },
    setup() {
      const basic = ref()

      onMounted(async () => {
        try {
          basic.value = await new BasicService().getBasicInfo()
        } catch (e) {
          console.error(e)
        }
      })

      return { basic }
    },
  })
</script>

<style scoped lang="scss"></style>
