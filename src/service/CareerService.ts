import axios from 'axios'
import { CareerGroup } from '@/types/career'

export class CareerService {
  getCareerGroups(): Promise<CareerGroup[]> {
    return axios.get('data/career.json').then((res) => res.data.careerGroup)
  }
}
