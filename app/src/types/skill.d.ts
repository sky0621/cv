export interface SkillGroup {
  id: number
  name: string
  skills: Skill[]
}

export interface SkillSet {
  skill: Skill
  version: string
}

export interface Skill {
  id: number
  key: string
  name: string
  tagKey: string
  url: string
}
