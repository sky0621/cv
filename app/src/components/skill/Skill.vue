<template>
  <div class="grid">
    <template v-for="s in skills_" :key="s.id">
      <div class="col">
        <Card class="col text-left mb-2">
          <template #title>
            <div>{{ s.name }}</div>
          </template>
          <template v-if="s.versions" #subtitle>
            <template v-for="(v, vIdx) in s.versions" :key="vIdx">
              <template v-if="vIdx > 0">/</template>
              {{ v }}
            </template>
          </template>
          <template v-if="s.summary || s.experience" #content>
            <template v-if="s.summary">
              <div class="mb-2">{{ s.summary }}</div>
            </template>
            <template v-if="s.experience">
              <div class="mb-2">経験：{{ s.experience?.total }}</div>
            </template>
          </template>
        </Card>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue'
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

<style lang="scss" scoped></style>
