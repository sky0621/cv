<template>
  <DataTable :value="basics" responsive-layout="stack" show-gridlines>
    <Column field="nickname" header="ニックネーム"></Column>
    <Column field="birthday" header="年齢">
      <template #body="slotProps">
        <template v-if="slotProps.data">
          <BasicAgeComponent :birthday="slotProps.data.birthday" />
        </template>
      </template>
    </Column>
    <Column field="job" header="職業"></Column>
    <Column field="belongTo" header="所属"></Column>
    <Column field="outputs" header="アウトプット">
      <template #body="slotProps">
        <template v-if="slotProps.data">
          <BasicOutputComponent :outputs="slotProps.data.outputs" />
        </template>
      </template>
    </Column>
    <Column field="likes" header="お気に入り">
      <template #body="slotProps">
        {{ slotProps.data ? slotProps.data.likes : '' }}
      </template>
    </Column>
    <Column field="qualifications" header="資格">
      <template #body="slotProps">
        {{ slotProps.data ? slotProps.data.qualifications : '' }}
      </template>
    </Column>
  </DataTable>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { Basic } from '@/types/basic'
  import BasicAgeComponent from '@/components/basic/Age.vue'
  import BasicOutputComponent from '@/components/basic/Output.vue'

  export default defineComponent({
    name: 'BasicComponent',
    components: {
      BasicAgeComponent,
      BasicOutputComponent,
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

<style scoped lang="scss"></style>
