<template>
      <div class="col">
        <Card class="col text-left mb-2">
          <template #title>
            <div>{{ skill_.name }}</div>
          </template>
          <template v-if="skill_.versions" #content>
            <div v-for="(v, vIdx) in skill_.versions" :key="vIdx">
              <template v-if="v.version">{{ v.version }} <SkillPeriodComponent :from="v.from" :to="v.to" /></template>
              <template v-else><SkillPeriodComponent :from="v.from" :to="v.to" /></template>
            </div>
          </template>
        </Card>
      </div>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue'
  import { Skill } from '@/types/skill'
  import SkillPeriodComponent from "@/components/skill/Period.vue";

  export default defineComponent({
    name: 'SkillComponent',
    components: {SkillPeriodComponent},
    props: {
      skill: {
        type: Object as PropType<Skill>,
        default: undefined,
      },
    },
    setup(props) {
      const skill_ = computed(() => {
        if (!props || !props.skill) return undefined
        return props.skill
      })
      return { skill_ }
    },
  })
</script>

<style lang="scss" scoped></style>
