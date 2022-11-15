<template>
  <BasicComponent :basic="basic"/>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import BasicComponent from '@/components/Basic.vue'
import {AttributeService} from '@/service/AttributeService'
import {ActivityService} from '@/service/ActivityService'
import {QualificationService} from '@/service/QualificationService'
import {Basic} from "@/types/basic";

export default defineComponent({
  name: 'BasicPage',
  components: {
    BasicComponent,
  },
  setup() {
    const basic = ref()

    onMounted(async () => {
      try {
        const b: Basic = {
          attribute: await new AttributeService().getAttributeInfo(),
          activities: await new ActivityService().getActivitiesInfo(),
          qualifications: await new QualificationService().getQualificationsInfo(),
        }
        basic.value = b;
      } catch (e) {
        console.error(e)
      }
    })

    return {basic}
  },
})
</script>

<style lang="scss" scoped></style>
