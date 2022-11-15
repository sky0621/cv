<template>
  <template v-if="notes_">
    <div class="text-left m-4">
      <template v-for="n in notes_" :key="n.id">
        <div class="mb-5">
          <div class="font-bold mb-2" style="font-size: larger">
            {{ n.label }}
          </div>
          <div class="d-flex flex-column">
            <div v-if="n.memo !== ''" class="ml-1">{{ n.memo }}</div>
            <ul style="padding-inline-start: 20px; margin-top: 0">
              <template v-for="i in n.items" :key="i.id">
                <li>{{ i.text }}</li>
              </template>
            </ul>
          </div>
        </div>
      </template>
    </div>
  </template>
  <template v-if="!notes_"> Loading...</template>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {Note} from '@/types/note'

export default defineComponent({
  name: 'NoteComponent',
  props: {
    notes: {
      type: Array as PropType<Note[]>,
      default: undefined,
    },
  },
  setup(props) {
    const notes_ = computed(() => {
      if (!props || !props.notes) return undefined
      return props.notes
    })

    return {notes_}
  },
})
</script>

<style lang="scss" scoped></style>
