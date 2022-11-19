<script lang="ts" setup>
import {computed, PropType} from 'vue'
import {Activity} from '@/types/activity'

const props = defineProps({
  activities: Array as PropType<Activity[]>
})

const activities_ = computed(() => {
  if (!props || !props.activities) return []
  return props.activities
})
</script>

<template>
  <template v-for="(a, index) in activities_" :key="index">
    <div class="flex flex-column justify-content-center mr-5">
      <i :class="a.icon"></i
      ><a :href="a.url" class="ml-1" target="_blank">{{ a.name }}</a>
    </div>
  </template>
</template>
