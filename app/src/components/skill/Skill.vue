<template>
  <div class="col">
    <Card class="col text-left mb-2">
      <template #title>
        <div>{{ skill_?.name }}</div>
      </template>
      <template #subtitle>
        <div>経験：{{ df }}</div>
      </template>
      <template v-if="skill_?.versions" #content>
        <Inplace :closable="true">
          <template #display
          ><span class="active:text-color">breakdown</span></template
          >
          <template #content>
            <div
                v-for="(v, vIdx) in skill_?.versions"
                :key="vIdx"
                style="min-width: 260px"
            >
              <template v-if="v.version">
                <div>{{ v.version }}</div>
                <SkillPeriodComponent :from="v.from" :to="v.to"/>
              </template>
              <template v-else>
                <div>-</div>
                <SkillPeriodComponent :from="v.from" :to="v.to"/>
              </template>
            </div>
          </template>
        </Inplace>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {Skill} from '@/types/skill'
import SkillPeriodComponent from '@/components/skill/Period.vue'
import {CalculationService} from '@/service/CalculationService'

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
    if (!props || !props.skill) return {key: '', name: '', versions: []}

    const cs = new CalculationService()

    const skill_ = computed(() => {
      if (!props || !props.skill) return undefined
      return props.skill
    })
    const len = props.skill.versions.length
    const df = computed(() => {
      const firstCareer = props?.skill?.versions.find(
          (_, idx) => idx === len - 1
      )
      if (!firstCareer) return '?'
      const latestCareer = props?.skill?.versions?.find((_, idx) => idx === 0)
      if (!latestCareer) return '?'
      return cs.differenceStrInMonths(
          new Date(`${latestCareer.to?.year}-${latestCareer.to?.month}-1`),
          new Date(`${firstCareer.from?.year}-${firstCareer.from?.month}-1`)
      )
    })
    return {skill_, df}
  },
})
</script>

<style lang="scss" scoped></style>
