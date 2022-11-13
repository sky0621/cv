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
          <div class="text-bold">担当タスク</div>
          <template v-for="(t, tIdx) in career_?.tasks" :key="tIdx">
            <div>{{ t }}</div>
          </template>
        </div>
        <div class="text-bold">使用技術</div>
        <template v-for="(g, gIdx) in career_?.skillGroups" :key="gIdx">
          <div v-if="g.title !== ''">【{{ g.title }}】</div>
          <div class="mb-4">
            <template v-for="(s, sIdx) in g.skills" :key="sIdx">
              <div>
                - {{ s.name }}
                <template v-if="s.versions">
                  (
                  <template v-for="(v, vIdx) in s.versions" :key="vIdx">
                    <template v-if="vIdx > 0">/</template>
                    {{ v }}
                  </template>
                  )
                </template>
              </div>
            </template>
          </div>
        </template>
      </template>
    </Card>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue'
  import { Career } from '@/types/career'
  import CareerNameComponent from '@/components/career/Name.vue'
  import CareerPeriodComponent from '@/components/career/Period.vue'
  import CareerDescriptionComponent from '@/components/career/Description.vue'

  export default defineComponent({
    name: 'CareerComponent',
    components: {
      CareerNameComponent,
      CareerPeriodComponent,
      CareerDescriptionComponent,
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
