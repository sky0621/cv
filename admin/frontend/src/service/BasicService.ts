import axios from 'axios'
import { Basic } from '@/types/basic'

export class BasicService {
  async list(): [Basic] {
    return axios.get('http://localhost:3002/basic').then((res) => res.data)
  }
}
