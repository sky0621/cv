<template>
  <SkillGroupComponent :skill-groups="skillGroups"/>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import SkillGroupComponent from '@/components/SkillGroup.vue'
import {SkillService} from '@/service/SkillService'

export default defineComponent({
  name: 'SkillPage',
  components: {
    SkillGroupComponent,
  },
  setup() {
    const skillGroups = ref()

    onMounted(async () => {
      try {
        skillGroups.value = await new SkillService().getSkillGroups()
      } catch (e) {
        console.error(e)
      }
    })

    return {skillGroups}
  },
})
</script>

<style lang="scss" scoped></style>
