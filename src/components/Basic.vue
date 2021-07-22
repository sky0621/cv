<template>
  <DataTable :value="basics" responsive-layout="stack" show-gridlines>
    <Column field="nickname" header="ニックネーム"></Column>
    <Column field="birthday" header="年齢">
      <template #body="slotProps">
        {{ slotProps.data ? ageFromBirthday(slotProps.data.birthday) : '' }}
        歳（{{ now() }} 現在）
      </template>
    </Column>
    <Column field="job" header="職業"></Column>
    <Column field="belongTo" header="所属"></Column>
    <Column field="outputs" header="アウトプット">
      <template #body="slotProps"> {{ slotProps.data }} </template>
    </Column>
    <Column field="likes" header="お気に入り">
      <template #body="slotProps"> {{ slotProps.data }} </template>
    </Column>
    <Column field="qualifications" header="資格">
      <template #body="slotProps">
        {{ slotProps.data }}
      </template>
    </Column>
  </DataTable>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { Basic } from '@/types/basic'
  import { CalculationService } from '@/service/CalculationService'

  export default defineComponent({
    name: 'BasicComponent',
    props: {
      basic: {
        type: Object as PropType<Basic>,
        required: true,
        default: undefined,
      },
    },
    setup(props) {
      const basics = computed(() => {
        if (!props || !props.basic) return []
        return [props.basic]
      })

      const cs = new CalculationService()
      const ageFromBirthday = cs.ageFromBirthday
      const now = cs.now

      return { basics, ageFromBirthday, now }
    },
  })
</script>

<style scoped lang="scss"></style>
