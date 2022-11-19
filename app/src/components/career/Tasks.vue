<script lang="ts" setup>
import {computed, PropType} from 'vue'
import {CareerTask} from '@/types/career'

const props = defineProps({
  tasks: Array as PropType<CareerTask[]>,
})

const tasks_ = computed(() => {
  if (!props || !props.tasks) return []
  return props.tasks
})
</script>

<template>
  <div class="font-bold">担当タスク</div>
  <template v-for="(t, tIdx) in tasks_" :key="tIdx">
    <div class="mb-2">
      <div v-if="t.name !== '-'" class="mb-1">【{{ t.name }}】</div>
      <template v-for="(d, tIdx) in t.description" :key="tIdx">
        <div>{{ d }}</div>
      </template>
    </div>
  </template>
</template>
