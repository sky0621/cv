import axios from 'axios'
import { Basic } from '@/types/basic'

export class BasicService {
  async get(id: number): Basic {
    return axios
      .get(`http://localhost:3002/basic/${id}`)
      .then((res) => res.data)
  }
}
