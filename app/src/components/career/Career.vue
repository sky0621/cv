<template>
    <Card class="text-left mb-2">
      <template #header>
        <CareerPeriodComponent :from="career_?.from" :to="career_?.to" />
      </template>
      <template #title>
        <CareerNameComponent :name="career_?.name" />
      </template>
      <template #subtitle>
        <CareerDescriptionComponent :description="career_?.description" />
        <Divider />
      </template>
      <template #content>
        <div class="mb-4">
          <CareerTasksComponent :tasks="career_?.tasks" />
        </div>
        <div>
          <CareerSkillGroupsComponent :skillGroups="career_?.skillGroups" />
        </div>
      </template>
    </Card>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue'
  import { Career } from '@/types/career'
  import CareerNameComponent from '@/components/career/Name.vue'
  import CareerPeriodComponent from '@/components/career/Period.vue'
  import CareerDescriptionComponent from '@/components/career/Description.vue'
  import CareerTasksComponent from '@/components/career/Tasks.vue'
  import CareerSkillGroupsComponent from '@/components/career/Skills.vue'

  export default defineComponent({
    name: 'CareerComponent',
    components: {
      CareerNameComponent,
      CareerPeriodComponent,
      CareerDescriptionComponent,
      CareerTasksComponent,
      CareerSkillGroupsComponent,
    },
    props: {
      career: {
        type: Object as PropType<Career>,
        default: undefined,
      },
    },
    setup(props) {
      const career_ = computed(() => {
        if (!props || !props.career) return undefined
        return props.career
      })
      return { career_ }
    },
  })
</script>

<style lang="scss" scoped></style>
