<script lang="ts" setup>
import {computed, PropType} from 'vue'
import {Qualification} from '@/types/qualification'

const props = defineProps({
  qualifications: Array as PropType<Qualification[]>,
})

const qualifications_ = computed(() => {
  if (!props || !props.qualifications) return []
  return props.qualifications
})
</script>

<template>
  <template v-for="q in qualifications_" :key="q.id">
    <Card>
      <template #header>
        <div class="ml-2 mt-2">{{ q.organization }}</div>
      </template>
      <template #title>
        <a :href="q.url" class="ml-1 text-lg" target="_blank">{{ q.name }}</a>
      </template>
      <template #content> {{ q.gotDate }} 取得（{{ q.memo }}）</template>
    </Card>
  </template>
</template>
