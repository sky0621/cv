<template>
  <BasicListComponent />
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import BasicListComponent from '@/components/basic/List.vue'
  import { BasicService } from '@/service/BasicService'

  export default defineComponent({
    name: 'BasicPage',
    components: {
      BasicListComponent,
    },
    setup() {
      const basic = ref()

      onMounted(async () => {
        try {
          basic.value = await new BasicService().list()
          console.log(basic.value)
        } catch (e) {
          console.error(e)
        }
      })

      return { basic }
    },
  })
</script>

<style scoped lang="scss"></style>
