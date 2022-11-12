<template>
  <DataView :value="activities_" layout="grid">
    <template #grid="slot">
      <div class="mr-5">
        <i :class="slot.data.icon"></i
        ><a :href="slot.data.url" class="ml-1" target="_blank">{{
          slot.data.name
        }}</a>
      </div>
    </template>
  </DataView>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { Activity } from '@/types/activity'

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

      return { activities_ }
    },
  })
</script>

<style lang="scss" scoped></style>
