import { Period } from '@/types/common'

export interface SkillGroup {
  id: number
  name: string
  skills: Skill[]
}

export interface Skill {
  id: number
  name: string
  versions?: string[]
  summary?: string
  experience?: Experience
}

export interface Experience {
  total: string
  periods: Period[]
}
