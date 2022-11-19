<script lang="ts">
import {defineComponent} from 'vue'
import SkillGroupComponent from '@/components/SkillGroup.vue'

export default defineComponent({
  name: 'SkillPage',
  components: {
    SkillGroupComponent,
  },
})
</script>

<template>
  <SkillGroupComponent/>
</template>
