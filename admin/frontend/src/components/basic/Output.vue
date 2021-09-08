<template>
  <DataTable :value="outputs_" responsive-layout="stack" show-gridlines>
    <template #header>
      <h4 class="p-m-0">アウトプット</h4>
    </template>
    <Column field="name" header="名称">
      <template #body="{ data }">
        <InputText v-model="data.name" type="text" />
      </template>
    </Column>
    <Column field="url" header="URL">
      <template #body="{ data }">
        <InputText v-model="data.url" type="text" />
      </template>
    </Column>
    <Column field="icon" header="アイコン">
      <template #body="{ data }">
        <InputText v-model="data.icon" type="text" />
      </template>
    </Column>
    <Column header="" style="width: 80px">
      <template #header>
        <Button
          icon="pi pi-plus"
          class="p-button-rounded p-button-plus"
          @click="addOutput"
        />
      </template>
      <template #body="{ data }">
        <Button
          icon="pi pi-times"
          class="p-button-rounded p-button-danger"
          @click="removeOutput(data.id)"
        />
      </template>
    </Column>
  </DataTable>
</template>

<script lang="ts">
  import { defineComponent, toRefs, PropType } from 'vue'
  import { Output } from '@/types/basic'

  export default defineComponent({
    name: 'BasicOutputComponent',
    props: {
      outputs: {
        type: Array as PropType<Output[]>,
        default: () => [],
      },
    },
    setup(props) {
      const outputs_ = toRefs(props).outputs

      const addOutput = () => {
        console.log('addOutput')
      }

      const removeOutput = (id: number) => {
        console.log('removeOutput')
        console.log(id)
      }

      return { outputs_, addOutput, removeOutput }
    },
  })
</script>

<style scoped lang="scss"></style>
