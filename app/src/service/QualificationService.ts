import axios from 'axios'
import { Qualification } from '@/types/qualification'

export class QualificationService {
  getQualificationsInfo(): Promise<Qualification[]> {
    return axios.get('data/qualifications.json').then((res) => res.data)
  }
}
