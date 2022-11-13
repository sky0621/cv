import axios from 'axios'
import { Note } from '@/types/note'

export class NoteService {
  getNotes(): Promise<Note[]> {
    return axios.get('data/notes.json').then((res) => res.data)
  }
}
