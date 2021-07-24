<template>
  <template v-for="s in skills_" :key="s.id">
    {{ s }}
  </template>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { Skill } from '@/types/skill'

  export default defineComponent({
    name: 'SkillComponent',
    props: {
      skills: {
        type: Array as PropType<Skill[]>,
        default: undefined,
      },
    },
    setup(props) {
      const skills_ = computed(() => {
        if (!props || !props.skills) return []
        return props.skills
      })
      return { skills_ }
    },
  })
</script>

<style scoped lang="scss"></style>
