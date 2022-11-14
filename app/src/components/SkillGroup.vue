<template>
  <template v-if="skillGroups_">
    <template v-for="g in skillGroups_" :key="g.id">
      <Divider />
      <div class="my-3 text-bold">{{ g.tagName }}</div>
      <Divider />
      <SkillsComponent :skills="g.skills" />
    </template>
  </template>
  <template v-if="!skillGroups_">
    Loading...
  </template>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { SkillGroup } from '@/types/skill'
  import SkillsComponent from '@/components/skill/Skills.vue'

  export default defineComponent({
    name: 'SkillGroupComponent',
    components: {
      SkillsComponent,
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

<style lang="scss" scoped></style>
