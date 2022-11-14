import axios from 'axios'
import { Attribute } from '@/types/attribute'

export class AttributeService {
  getAttributeInfo(): Promise<Attribute> {
    return axios.get('data/attribute.json').then((res) => res.data)
  }
}
