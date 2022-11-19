<script lang="ts" setup>
import {ref} from 'vue'
import {SkillGroup} from '@/types/skill'
import {SkillService} from '@/service/SkillService'
import SkillsComponent from '@/components/skill/Skills.vue'

const skillGroups = ref()

const sg: SkillGroup[] = await new SkillService().getSkillGroups()

skillGroups.value = sg
</script>

<template>
  <template v-for="g in skillGroups" :key="g.id">
    <Divider/>
    <div class="my-3 text-bold">{{ g.tagName }}</div>
    <Divider/>
    <SkillsComponent :skills="g.skills"/>
  </template>
</template>

<style lang="scss" scoped></style>
