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

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {CareerTask} from '@/types/career'

export default defineComponent({
  tasks: 'CareerTasksComponent',
  props: {
    tasks: {
      type: Array as PropType<CareerTask[]>,
      default: [],
    },
  },
  setup(props) {
    const tasks_ = computed(() => {
      if (!props || !props.tasks) return []
      return props.tasks
    })

    return {tasks_}
  },
})
</script>

<style lang="scss" scoped></style>
