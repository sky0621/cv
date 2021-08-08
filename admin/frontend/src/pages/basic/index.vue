<template>
  <BasicListComponent :basics="basics" />
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
      const basics = ref()

      onMounted(async () => {
        try {
          basics.value = await new BasicService().list()
          console.log(basics.value)
        } catch (e) {
          console.error(e)
        }
      })

      return { basics }
    },
  })
</script>

<style scoped lang="scss"></style>
