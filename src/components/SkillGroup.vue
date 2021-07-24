<template>
  <div>SkillGroup</div>
  <div>{{ skillGroups_ }}</div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { SkillGroup } from '@/types/skill'

  export default defineComponent({
    name: 'SkillGroupComponent',
    props: {
      skillGroups: {
        type: Array as PropType<SkillGroup[]>,
        default: undefined,
      },
    },
    setup(props) {
      const skillGroups_ = computed(() => {
        if (!props || !props.skillGroups) return []
        return props.skillGroups
      })
      return { skillGroups_ }
    },
  })
</script>

<style scoped lang="scss"></style>
