<template>
  <template v-for="q in qualifications_" :key="q.id">
    <Card>
      <template #header>
        <div class="ml-2 mt-2">{{ q.organization }}</div>
      </template>
      <template #title>
        <a :href="q.url" class="ml-1" target="_blank">{{ q.name }}</a>
      </template>
      <template #content> {{ q.gotDate }} 取得（{{ q.memo }}） </template>
    </Card>
  </template>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { Qualification } from '@/types/qualification'

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

<style lang="scss" scoped></style>
