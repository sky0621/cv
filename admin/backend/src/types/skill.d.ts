import {Period} from './common'

export type SkillGroup = {
    id: number
    name: string
    skills: Skill[]
}

export type Skill = {
    id: number
    name: string
    versions?: string[]
    summary?: string
    experience?: Experience
}

export type Experience = {
    total: string
    periods: Period[]
}
