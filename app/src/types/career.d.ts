import { DateYM } from '@/types/common'

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
  skillGroups: CareerSkillGroup[]
}

export interface CareerTask {
  name: string
  description: string[]
}

export interface CareerSkillGroup {
  label: string
  skills: CareerSkillSet[]
}

export interface CareerSkillSet {
  skill: CareerSkill
  version: string
}

export interface CareerSkill {
  id: number
  key: string
  name: string
  tagKey: string
  url: string
}
