<template>
  <template v-for="(a, index) in activities_" :key="index">
    <div class="flex flex-column justify-content-center mr-5">
      <i :class="a.icon"></i
      ><a :href="a.url" class="ml-1" target="_blank">{{ a.name }}</a>
    </div>
  </template>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {Activity} from '@/types/activity'

export default defineComponent({
  name: 'BasicActivityComponent',
  props: {
    activities: {
      type: Array as PropType<Activity[]>,
      default: () => [],
    },
  },
  setup(props) {
    const activities_ = computed(() => {
      if (!props || !props.activities) return []
      return props.activities
    })

    return {activities_}
  },
})
</script>

<style lang="scss" scoped></style>
