<template>
  <template v-for="q in qualifications_" :key="q.id">
    <Card>
      <template #header>
        <div class="p-ml-2 p-mt-2">{{ q.org }}</div>
      </template>
      <template #title>
        <a :href="q.url" target="_blank" class="p-ml-1">{{ q.name }}</a>
      </template>
      <template #content> {{ q.date }} 取得（{{ q.note }}） </template>
    </Card>
  </template>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { Qualification } from '@/types/basic'

  export default defineComponent({
    name: 'BasicQualificationComponent',
    props: {
      qualifications: {
        type: Array as PropType<Qualification[]>,
        default: () => [],
      },
    },
    setup(props) {
      const qualifications_ = computed(() => {
        if (!props || !props.qualifications) return []
        return props.qualifications
      })

      return { qualifications_ }
    },
  })
</script>

<style scoped lang="scss"></style>
