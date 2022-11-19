<script lang="ts" setup>
import {computed, PropType} from 'vue'
import {CareerSkillGroup} from '@/types/career'

const props = defineProps({
  skillGroups: Array as PropType<CareerSkillGroup[]>,
})

const skillGroups_ = computed(() => {
  if (!props || !props.skillGroups) return []
  return props.skillGroups
})
</script>

<template>
  <div class="font-bold">使用技術</div>
  <template v-for="(sg, sgIdx) in skillGroups_" :key="sgIdx">
    <div class="mb-2">
      <div v-if="sg.label !== '-'" class="mb-1">【{{ sg.label }}】</div>
      <ul>
        <li v-for="(s, sIdx) in sg.skills" :key="sIdx" class="mb-2">
          <template v-if="s.skill.url !== ''">
            <a :href="s.skill.url" target="_blank">{{ s.skill.name }}</a>
            <template v-if="s.version">({{ s.version }})</template>
          </template>
          <template v-if="s.skill.url === ''">
            {{ s.skill.name }}
            <template v-if="s.version">({{ s.version }})</template>
          </template>
        </li>
      </ul>
    </div>
  </template>
</template>
