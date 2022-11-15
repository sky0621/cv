<template>
  <div class="grid">
    <template v-for="s in skills_" :key="s.id">
      <SkillComponent :skill="s"/>
    </template>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {Skill} from '@/types/skill'
import SkillComponent from '@/components/skill/Skill.vue'

export default defineComponent({
  name: 'SkillsComponent',
  components: {
    SkillComponent,
  },
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
    return {skills_}
  },
})
</script>

<style lang="scss" scoped></style>
