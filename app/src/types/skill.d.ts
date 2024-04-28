import { DateYM } from '@/types/common'

export interface SkillGroup {
  tagKey: string
  tagName: string
  skills: Skill[]
}

export interface Skill {
  code: string
  name: string
  url: string
  versions: Version[]
}

export interface Version {
  version: string
  from: DateYM
  to: DateYM
}
