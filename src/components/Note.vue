<template>
  <div class="p-text-left">
    <div class="p-mb-4">
      <div class="p-text-bold p-mb-2">■サマリ</div>
      <div class="p-d-flex p-flex-column">
        <Textarea
          v-model="summary"
          class="p-flex"
          :auto-resize="true"
          disabled
        />
      </div>
    </div>

    <div class="p-mb-5">
      <div class="p-text-bold p-mb-3">■就労状況 ({{ now() }} 現在)</div>
      <div class="p-d-flex p-flex-column p-ml-4">
        {{ note_?.status }}
      </div>
    </div>

    <div class="p-mb-4">
      <div class="p-text-bold">■就労条件</div>
      <div class="p-d-flex p-flex-column">
        <ul>
          <template v-for="(c, cIdx) in note_?.conditions" :key="cIdx">
            <li>{{ c }}</li>
          </template>
        </ul>
      </div>
    </div>

    <div class="p-mb-4">
      <div class="p-text-bold">■理想とする現場</div>
      <div class="p-d-flex p-flex-column">
        <ul>
          <template v-for="(w, wIdx) in note_?.wishes" :key="wIdx">
            <li>{{ w }}</li>
          </template>
        </ul>
      </div>
    </div>

    <div class="p-mb-4">
      <div class="p-text-bold p-mb-3">■家庭学習の状況 ({{ now() }} 現在)</div>
      <div class="p-d-flex p-flex-column">
        <div class="p-ml-4">{{ note_?.studying?.summary }}</div>
        <ul>
          <template v-for="(s, sIdx) in note_?.studying?.items" :key="sIdx">
            <li class="p-mb-1">{{ s }}</li>
          </template>
        </ul>
      </div>
    </div>

    <div class="p-mb-4">
      <div class="p-text-bold">■未経験だが興味があるもの</div>
      <div class="p-d-flex p-flex-column">
        <ul>
          <template v-for="(i, iIdx) in note_?.interest" :key="iIdx">
            <li>{{ i }}</li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import { Note } from '@/types/note'
  import { CalculationService } from '@/service/CalculationService'

  export default defineComponent({
    name: 'NoteComponent',
    props: {
      note: {
        type: Object as PropType<Note>,
        default: undefined,
      },
    },
    setup(props) {
      const note_ = computed(() => {
        if (!props || !props.note) return undefined
        return props.note
      })

      const summary = note_.value?.summary

      const now = new CalculationService().now

      return { note_, summary, now }
    },
  })
</script>

<style scoped lang="scss"></style>
