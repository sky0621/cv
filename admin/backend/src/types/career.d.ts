import {Period} from './common'
import {Skill} from './skill'

export type CareerGroup = {
    id: number
    title: string
    period: Period
    careers: Career[]
}

export type Career = {
    id: number
    title: string
    from: string
    to: string
    summary: string
    tasks: string[]
    skillGroups: SkillGroup[]
}

export type SkillGroup = {
    title: string
    skills: Skill[]
}
