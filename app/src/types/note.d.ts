export type Note = {
  label: string
  memo: string | null
  items: NoteItem[]
}

export type NoteItem = {
  text: string
}
