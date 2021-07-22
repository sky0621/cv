<template>
  <Skill />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Skill from '@/components/Skill.vue'

  export default defineComponent({
    name: 'SkillPage',
    components: {
      Skill,
    },
  })
</script>

<style scoped lang="scss"></style>
