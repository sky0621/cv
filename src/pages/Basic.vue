<template>
  <div>{{ basicInfo }}</div>
  <DataTable :value="basicInfo" responsive-layout="scroll" show-gridlines>
    <template #header> 基本情報 </template>
    <Column field="code" header="key"></Column>
    <Column field="name" header="value"></Column>
  </DataTable>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import BasicService from '../service/BasicService'

  export default defineComponent({
    name: 'Basic',
    setup() {
      onMounted(() => {
        basicService.value
          .getBasicInfo()
          .then((data) => (basicInfo.value = data))
      })

      const basicInfo = ref()
      const basicService = ref(new BasicService())

      return { basicInfo }
    },
  })
</script>

<style scoped lang="scss"></style>
