<script lang="ts" setup>
import {SkillGroup} from '@/types/skill'
import SkillsComponent from '@/components/skill/Skills.vue'
import {PropType} from "vue";

defineProps({
  skillGroups: Array as PropType<SkillGroup[]>,
})
</script>

<template>
  <template v-for="g in skillGroups" :key="g.id">
    <Divider/>
    <div class="my-3 text-bold">{{ g.tagName }}</div>
    <Divider/>
    <SkillsComponent :skills="g.skills"/>
  </template>
</template>
