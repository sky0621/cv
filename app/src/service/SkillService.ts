import axios from 'axios'
import { SkillGroup } from '@/types/skill'

export class SkillService {
  getSkillGroups(): Promise<SkillGroup[]> {
    return axios.get('data/skill.json').then((res) => res.data.skillGroup)
  }
}
