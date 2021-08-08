<template>
  <DataTable :value="basics_" responsive-layout="stack" show-gridlines>
    <Column field="nickname" header="ニックネーム"></Column>
    <Column field="birthday" header="生年月日"></Column>
    <Column field="job" header="職業"></Column>
    <Column field="belongTo" header="所属"></Column>
  </DataTable>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { Basic } from '@/types/basic'

  export default defineComponent({
    name: 'BasicListComponent',
    props: {
      basics: {
        type: Array as PropType<Basic[]>,
        default: undefined,
      },
    },
    setup(props) {
      const basics_ = computed(() => {
        if (!props || !props.basics) return []
        return props.basics
      })
      console.log(basics_)
      return { basics_ }
    },
  })
</script>

<style scoped lang="scss"></style>
