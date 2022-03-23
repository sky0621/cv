export type Note = {
  id: number
  label: string
  showNow: boolean
  isMultipleLine: boolean
  memo: string | null
  order: number
  userId: number
  items: NoteItem[]
}

export type NoteItem = {
  id: number
  text: string
  order: number
  noteId: number
}
