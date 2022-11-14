export interface xSkillGroup {
  tagKey: string
  tagName: string
  skills: xSkill[]
}

export interface xSkillSet {
  skill: xSkill
  version: string
}

export interface xSkill {
  id: number
  key: string
  name: string
  tagKey: string
  url: string
}
