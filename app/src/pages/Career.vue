<script lang="ts" setup>
import {CareerGroup} from "@/types/career";
import CareerGroupComponent from '@/components/CareerGroup.vue'

const careerGroups: CareerGroup[] = await fetch('data/careergroups.json').then((r) => r.json())
</script>

<template>
  <CareerGroupComponent :career-groups="careerGroups"/>
</template>
