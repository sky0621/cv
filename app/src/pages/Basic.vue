<template>
  <BasicComponent :basic="basic" />
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import BasicComponent from '@/components/Basic.vue'
  import { BasicService } from '@/service/BasicService'
  import { AttributeService } from '@/service/AttributeService'

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
          const att = await new AttributeService().getAttributeInfo()
          console.log(att)
        } catch (e) {
          console.error(e)
        }
      })

      return { basic }
    },
  })
</script>

<style lang="scss" scoped></style>
