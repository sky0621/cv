<script lang="ts" setup>
import {Note} from '@/types/note'
import NoteComponent from '@/components/Note.vue'

const notes: Note[] = await fetch('data/notes.json').then((r) => r.json());
</script>

<template>
  <NoteComponent :notes="notes"/>
</template>
