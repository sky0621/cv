<script lang="ts" setup>
import {SkillGroup} from '@/types/skill'
import SkillGroupComponent from '@/components/SkillGroup.vue'

const skillGroups: SkillGroup[] = await fetch('data/skills.json').then((r) => r.json());
</script>

<template>
  <SkillGroupComponent :skill-groups="skillGroups"/>
</template>
