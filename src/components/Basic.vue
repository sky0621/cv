<template>
  <DataTable :value="basics" responsive-layout="stack" show-gridlines>
    <Column field="nickname" header="ニックネーム"></Column>
    <Column field="birthday" header="年齢">
      <template #body="slotProps"> {{ slotProps.data.birthday }} 歳 </template>
    </Column>
    <Column field="job" header="職業"></Column>
    <Column field="belongTo" header="所属"></Column>
    <Column field="output" header="アウトプット">
      <template #body="slotProps"> {{ slotProps.data.outputs }} </template>
    </Column>
    <Column field="like" header="お気に入り">
      <template #body="slotProps"> {{ slotProps.data.likes }} </template>
    </Column>
    <Column field="qualification" header="資格">
      <template #body="slotProps"> {{ slotProps.data.qualifications }} </template>
    </Column>
  </DataTable>
</template>

<script lang="ts">
  import { defineComponent, ref, PropType, computed } from 'vue'
  import { Basic } from '@/types/basic.d.ts'
  import CalculationService from '@/service/CalculationService.ts'

  export default defineComponent({
    name: 'Basic',
    props: {
      basic: {
        type: Object as PropType<Basic>,
        required: true,
        default: {},
      }
    },
    setup(props) {
      const basics = computed(() => { return [props.basic] })
      const ageFromBirthday = CalculationService.ageFromBirthday
      return { basics, ageFromBirthday }
    }
  })
</script>

<style scoped lang="scss"></style>
