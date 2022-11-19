<script lang="ts">
import {defineComponent} from 'vue'
import NoteComponent from '@/components/Note.vue'

export default defineComponent({
  name: 'NotePage',
  components: {
    NoteComponent,
  },
})
</script>

<template>
  <NoteComponent/>
</template>

<style lang="scss" scoped></style>
