<template>
  <div>Home</div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import { BasicService } from '@/service/BasicService'

  export default defineComponent({
    name: 'HomePage',
    components: {},
    setup() {
      onMounted(async () => {
        try {
          const res = await new BasicService().getBasicInfo()
          console.log(res)
        } catch (e) {
          console.error(e)
        }
      })
    },
  })
</script>

<style scoped lang="scss"></style>
