<template>
  <template v-for="(description, tIdx) in descriptions_" :key="tIdx">
    {{ description }}<br />
  </template>
</template>

<script lang="ts">
import {defineComponent, computed, PropType} from 'vue'

  export default defineComponent({
    description: 'CareerDescriptionComponent',
    props: {
      description: {
        type: Array as PropType<String[]>,
        default: '',
      },
    },
    setup(props) {
      const descriptions_ = computed(() => {
        if (!props || !props.description) return undefined
        return props.description
      })

      return { descriptions_ }
    },
  })
</script>

<style lang="scss" scoped></style>
