<template>
  <div class="text-left">
    <template v-for="n in notes_" :key="n.id">
      <div class="mb-5">
        <div class="text-bold mb-2" style="font-size: larger">
          {{ n.label }}<span v-if="n.showNow">（{{ now() }} 現在）</span>
        </div>
        <div class="d-flex flex-column">
          <div v-if="n.memo !== ''" class="ml-1">{{ n.memo }}</div>
          <template v-if="n.isMultipleLine">
            <template v-for="i in n.items" :key="i.id">
              <Textarea
                :auto-resize="true"
                :value="i.text"
                class="flex"
                disabled
                style="opacity: 1"
              />
            </template>
          </template>
          <template v-else>
            <ul style="padding-inline-start: 20px; margin-top: 0">
              <template v-for="i in n.items" :key="i.id">
                <li>{{ i.text }}</li>
              </template>
            </ul>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue'
  import { Note } from '@/types/note'
  import { CalculationService } from '@/service/CalculationService'

  export default defineComponent({
    name: 'NoteComponent',
    props: {
      notes: {
        type: Object as PropType<Note[]>,
        default: undefined,
      },
    },
    setup(props) {
      const notes_ = computed(() => {
        if (!props || !props.notes) return undefined
        return props.notes
      })

      const now = new CalculationService().now

      return { notes_, now }
    },
  })
</script>

<style lang="scss" scoped></style>
