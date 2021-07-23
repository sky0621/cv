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
      <template #body="slotProps">
        <template v-if="slotProps.data">
          <DataView :value="slotProps.data.outputs" layout="grid">
            <template #grid="inSlotProps">
              <div class="p-mr-3 p-mb-2">
                <i :class="inSlotProps.data.icon"></i
                ><a
                  :href="inSlotProps.data.url"
                  target="_blank"
                  class="p-ml-1"
                  >{{ inSlotProps.data.name }}</a
                >
              </div>
            </template>
          </DataView>
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
