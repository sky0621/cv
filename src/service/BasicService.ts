import axios from 'axios'
import { Basic } from '@/types/basic.d.ts'

export default class BasicService {
  getBasicInfo(): Basic {
    return axios.get('data/basic.json').then((res) => res.data)
  }
}
