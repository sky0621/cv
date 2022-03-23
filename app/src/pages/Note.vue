<template>
  <NoteComponent :notes="notes" />
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import NoteComponent from '@/components/Note.vue'
  import { NoteService } from '@/service/NoteService'

  export default defineComponent({
    name: 'NotePage',
    components: {
      NoteComponent,
    },
    setup() {
      const notes = ref()

      onMounted(async () => {
        try {
          notes.value = await new NoteService().getNotes()
        } catch (e) {
          console.error(e)
        }
      })

      return { notes }
    },
  })
</script>

<style scoped lang="scss"></style>
