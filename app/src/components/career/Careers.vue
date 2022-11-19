<script lang="ts" setup>
import {computed, PropType} from 'vue'
import {Career} from '@/types/career'
import CareerComponent from '@/components/career/Career.vue'

const props = defineProps({careers: Array as PropType<Career[]>})

const careers_ = computed(() => {
  if (!props || !props.careers) return []
  return props.careers
})
</script>

<template>
  <template v-for="c in careers_" :key="c.id">
    <CareerComponent :career="c"/>
  </template>
</template>
