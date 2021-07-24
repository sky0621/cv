<template>
  <div class="p-grid">
    <template v-for="s in skills_" :key="s.id">
      <div class="p-col">
        <Card class="p-col p-text-left p-mb-2">
          <template #title>
            <div>{{ s.name }}</div>
          </template>
          <template v-if="s.versions" #subtitle>
            <template v-for="(v, vIdx) in s.versions" :key="vIdx">
              <template v-if="vIdx > 0">/</template>
              {{ v }}
            </template>
          </template>
          <template v-if="s.experience" #content>
            <div class="p-mb-2">経験：{{ s.experience?.total }}</div>
            <Inplace :closable="true">
              <template #display> breakdown </template>
              <template #content>
                <template
                  v-for="(p, pIdx) in s.experience?.periods"
                  :key="pIdx"
                >
                  <div class="p-text-secondary p-mb-1">
                    {{ p.from }} ~ {{ p.to }}
                  </div>
                </template>
              </template>
            </Inplace>
          </template>
        </Card>
      </div>
    </template>
  </div>
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
