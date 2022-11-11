<template>
  <DataTable :value="basics" responsive-layout="stack" show-gridlines>
    <Column field="nickname" header="ニックネーム">
      <template #body="slot">
        <BasicNicknameComponent
          v-if="slot.data"
          :nickname="slot.data.attribute.nickname"
        />
      </template>
    </Column>
    <Column field="birthday" header="年齢">
      <template #body="slot">
        <BasicAgeComponent v-if="slot.data" :day="slot.data.attribute.birthday.day" :month="slot.data.attribute.birthday.month" :year="slot.data.attribute.birthday.year" />
      </template>
    </Column>
    <Column field="attribute.job" header="職業"></Column>
    <Column field="attribute.belongTo" header="所属"></Column>
    <Column field="activities" header="アウトプット">
      <template #body="slot">
        <BasicOutputComponent v-if="slot.data" :activities="slot.data.activities" />
      </template>
    </Column>
    <Column field="qualifications" header="資格">
      <template #body="slot">
        <BasicQualificationComponent
          v-if="slot.data"
          :qualifications="slot.data.qualifications"
        />
      </template>
    </Column>
    <Column field="attribute.pr" header="PR"></Column>
  </DataTable>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { Basic } from '@/types/basic'
  import BasicNicknameComponent from '@/components/basic/Nickname.vue'
  import BasicAgeComponent from '@/components/basic/Age.vue'
  import BasicOutputComponent from '@/components/basic/Activity.vue'
  import BasicQualificationComponent from '@/components/basic/Qualification.vue'

  export default defineComponent({
    name: 'BasicComponent',
    components: {
      BasicNicknameComponent,
      BasicAgeComponent,
      BasicOutputComponent,
      BasicQualificationComponent,
    },
    props: {
      basic: {
        type: Object as PropType<Basic>,
        default: undefined,
      },
    },
    setup(props) {
      const basics = computed(() => {
        if (!props || !props.basic) return []
        return [props.basic]
      })
      return { basics }
    },
  })
</script>

<style lang="scss" scoped></style>
