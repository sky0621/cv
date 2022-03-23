<template>
  <div class="p-text-left">
    <template v-for="n in notes_" :key="n.id">
      <div class="p-mb-5">
        <div class="p-text-bold p-mb-2">
          ■{{ n.label }}<span v-if="n.showNow">（{{ now() }} 現在）</span>
        </div>
        <div class="p-d-flex p-flex-column">
          <div v-if="n.memo !== ''" class="p-ml-4">{{ n.memo }}</div>
          <template v-if="n.isMultipleLine">
            <template v-for="i in n.items" :key="i.id">
              <Textarea
                :value="i.text"
                class="p-flex"
                :auto-resize="true"
                disabled
              />
            </template>
          </template>
          <template v-else>
            <ul>
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

<style scoped lang="scss"></style>
