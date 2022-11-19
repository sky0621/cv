<script lang="ts" setup>
import {computed, PropType} from 'vue'
import {Skill} from '@/types/skill'
import SkillComponent from '@/components/skill/Skill.vue'

const props = defineProps({
  skills: Array as PropType<Skill[]>,
})

const skills_ = computed(() => {
  if (!props || !props.skills) return []
  return props.skills
})
</script>

<template>
  <div class="grid">
    <template v-for="s in skills_" :key="s.id">
      <SkillComponent :skill="s"/>
    </template>
  </div>
</template>
