<template>
  <DataTable :value="basic" responsive-layout="stack" show-gridlines>
    <Column field="nickname" header="aニックネーム"></Column>
    <Column field="birthday" header="年齢">
      <template #body="slotProps"> {{ slotProps.data.birthday }} 歳 </template>
    </Column>
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
        basicService.value.getBasicInfo().then((data) => (basic.value = data))
      })

      const basic = ref()
      const basicService = ref(new BasicService())

      return { basic }
    },
  })
</script>

<style scoped lang="scss"></style>
