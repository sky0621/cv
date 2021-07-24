<template>
  <template v-for="g in skillGroups_" :key="g.id">
    <Divider />
    <div class="p-my-3 p-text-bold">{{ g.name }}</div>
    <Divider />
    <SkillComponent :skills="g.skills" />
  </template>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { SkillGroup } from '@/types/skill'
  import SkillComponent from '@/components/skill/Skill.vue'

  export default defineComponent({
    name: 'SkillGroupComponent',
    components: {
      SkillComponent,
    },
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
