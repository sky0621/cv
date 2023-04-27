<script lang="ts" setup>
  import { computed, PropType } from 'vue'
  import { Skill, Version } from '@/types/skill'
  import SkillPeriodComponent from '@/components/skill/Period.vue'
  import { CalculationService } from '@/service/CalculationService'
  import { differenceInMonths } from 'date-fns'

  const props = defineProps({
    skill: Object as PropType<Skill>,
  })

  const cs = new CalculationService()

  const skill_ = computed(() => {
    if (!props || !props.skill) return undefined
    return props.skill
  })

  const df = computed(() => {
    let sum = 0
    // reduce ?
    skill_?.value?.versions?.forEach((v: Version) => {
      sum +=
        differenceInMonths(
          new Date(`${v.to.year}-${v.to.month}-1`.replace(/-/g, '/')),
          new Date(`${v.from.year}-${v.from.month}-1`.replace(/-/g, '/'))
        ) + 1
    })
    return cs.diffFormat(sum)
  })
</script>

<template>
  <div class="col">
    <Card class="col text-left mb-2">
      <template #title>
        <template v-if="skill_?.url !== ''">
          <div>
            <a :href="skill_?.url" target="_blank">{{ skill_?.name }}</a>
          </div>
        </template>
        <template v-else>
          <div>{{ skill_?.name }}</div>
        </template>
      </template>
      <template #subtitle>
        <div>経験：{{ df ? df : '-' }}</div>
      </template>
      <template v-if="skill_?.versions" #content>
        <Inplace :closable="true">
          <template #display
            ><span class="active:text-color; arrow_s">breakdown</span></template
          >
          <template #content>
            <div
              v-for="(v, vIdx) in skill_?.versions"
              :key="vIdx"
              style="min-width: 260px"
            >
              <template v-if="v.version">
                <div>{{ v.version }}</div>
                <SkillPeriodComponent :from="v.from" :to="v.to" />
              </template>
              <template v-else>
                <div>-</div>
                <SkillPeriodComponent :from="v.from" :to="v.to" />
              </template>
            </div>
          </template>
        </Inplace>
      </template>
    </Card>
  </div>
</template>

<style lang="scss">
  .arrow_s {
    position: relative;
    display: inline-block;
    padding-left: 12px;
    color: #333;
    text-decoration: none;
  }

  .arrow_s:before {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 0 6px 8px;
    border-color: transparent transparent transparent #333;
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -6px;
  }
</style>