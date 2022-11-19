<script lang="ts" setup>
import {Attribute} from "@/types/attribute";
import {Activity} from "@/types/activity";
import {Qualification} from "@/types/qualification";
import BasicComponent from '@/components/Basic.vue'

const attribute: Attribute = await fetch('data/attribute.json').then((r) => r.json());
const activities: Activity[] = await fetch('data/activities.json').then((r) => r.json());
const qualifications: Qualification[] = await fetch('data/qualifications.json').then((r) => r.json());
</script>

<template>
  <BasicComponent :activities="activities" :attribute="attribute" :qualifications="qualifications"/>
</template>
