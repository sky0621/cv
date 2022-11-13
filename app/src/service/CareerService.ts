import axios from 'axios'
import { CareerGroup } from '@/types/career'

export class CareerService {
  getCareerGroups(): Promise<CareerGroup[]> {
    return axios.get('data/careergroups.json').then((res) => res.data)
  }
}
