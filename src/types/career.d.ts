export interface CareerGroup {
  id: number
  title: string
  period: Period
  careers: Career[]
}

export interface Period {
  from: string
  to: string
}

export interface Career {
  id: number
  title: string
  from: string
  to: string
  summary: string
  tasks: string[]
  skillGroups: SkillGroup[]
}

export interface SkillGroup {
  title: string
  skills: Skill[]
}

export interface Skill {
  name: string
  versions: string[]
}
