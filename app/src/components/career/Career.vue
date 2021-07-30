<template>
  <template v-for="c in careers_" :key="c.id">
    <Card class="p-text-left p-mb-2">
      <template #header>
        <div class="p-pl-3 p-pt-3">{{ c.from }} - {{ c.to }}</div>
      </template>
      <template #title>
        <div>{{ c.title }}</div>
      </template>
      <template #subtitle>
        <div>{{ c.summary }}</div>
        <Divider />
      </template>
      <template #content>
        <div class="p-mb-4">
          <div class="p-text-bold">担当タスク</div>
          <template v-for="(t, tIdx) in c.tasks" :key="tIdx">
            <div>{{ t }}</div>
          </template>
        </div>
        <div class="p-text-bold">使用技術</div>
        <template v-for="(g, gIdx) in c.skillGroups" :key="gIdx">
          <div v-if="g.title !== ''">【{{ g.title }}】</div>
          <div class="p-mb-4">
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
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { Career } from '@/types/career'

  export default defineComponent({
    name: 'CareerComponent',
    props: {
      careers: {
        type: Array as PropType<Career[]>,
        default: undefined,
      },
    },
    setup(props) {
      const careers_ = computed(() => {
        if (!props || !props.careers) return []
        return props.careers
      })
      return { careers_ }
    },
  })
</script>

<style scoped lang="scss"></style>
