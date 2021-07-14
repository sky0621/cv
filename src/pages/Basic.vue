<template>
  <DataTable :value="basicInfo" responsive-layout="stack" show-gridlines>
    <Column field="nickname" header="ニックネーム"></Column>
    <Column field="birthday" header="年齢"></Column>
    <Column field="job" header="職業"></Column>
    <Column field="belong2" header="所属"></Column>
    <Column field="output" header="アウトプット"></Column>
    <Column field="like" header="お気に入り"></Column>
    <Column field="qualification" header="資格"></Column>
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
