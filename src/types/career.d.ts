export interface CareerGroup {
  title: string
  careers: Career[]
}

export interface Career {
  title: string
  from: string
  to: string
  summary: string
  task: string
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
