<template>
  <NoteComponent :note="note" />
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
      const note = ref()

      onMounted(async () => {
        try {
          note.value = await new NoteService().getNote()
        } catch (e) {
          console.error(e)
        }
      })

      return { note }
    },
  })
</script>

<style scoped lang="scss"></style>
