import { DateYM } from '@/types/common'
import { SkillSet } from '@/types/skill'

export interface CareerGroup {
  label: string
  careers: Career[]
}

export interface Career {
  name: string
  description: string[]
  from: DateYM
  to: DateYM
  tasks: CareerTask[]
  skillGroups: SkillGroup[]
}

export interface CareerTask {
  name: string
  description: string[]
}

export interface SkillGroup {
  label: string
  skills: SkillSet[]
}
