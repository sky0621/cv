<template>
  <BasicEditComponent :basic="basic" />
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import BasicEditComponent from '@/components/basic/Edit.vue'
  import { BasicService } from '@/service/BasicService'

  export default defineComponent({
    name: 'BasicPage',
    components: {
      BasicEditComponent,
    },
    setup() {
      const basic = ref()

      onMounted(async () => {
        try {
          basic.value = await new BasicService().get(1)
        } catch (e) {
          console.error(e)
        }
      })

      return { basic }
    },
  })
</script>

<style scoped lang="scss"></style>
