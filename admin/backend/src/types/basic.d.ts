export type Basic = {
    id: number
    nickname: string
    birthday: string
    job: string
    belongTo: string
    outputs: Output[]
    likes: string[]
    qualifications: Qualification[]
}

export type Output = {
    id: number
    name: string
    url: string
    icon: string
}

export type Qualification = {
    id: number
    name: string
    org: string
    url: string
    date: string
    note: string
}
