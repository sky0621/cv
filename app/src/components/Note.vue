<script lang="ts" setup>
import {Note} from '@/types/note'
import {PropType} from "vue";

defineProps({
  notes: Array as PropType<Note[]>,
})
</script>

<template>
  <div class="text-left m-4">
    <template v-for="n in notes" :key="n.id">
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
