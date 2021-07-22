import axios from 'axios'
import { Basic } from '@/types/basic'

export class BasicService {
  getBasicInfo(): Promise<Basic> {
    return axios.get('data/basic.json').then((res) => (res.data))
  }
}
