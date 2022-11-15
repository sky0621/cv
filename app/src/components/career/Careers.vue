<template>
  <template v-for="c in careers_" :key="c.id">
    <CareerComponent :career="c"/>
  </template>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {Career} from '@/types/career'
import CareerComponent from '@/components/career/Career.vue'

export default defineComponent({
  name: 'CareersComponent',
  components: {
    CareerComponent,
  },
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
    return {careers_}
  },
})
</script>

<style lang="scss" scoped></style>
