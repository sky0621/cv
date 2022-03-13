export interface Basic {
  id: number
  nickname: string
  birthday: string
  job: string
  belongTo: string
  outputs: Output[]
  likes: Like[]
  qualifications: Qualification[]
}

export interface Output {
  id: number
  name: string
  url: string
  icon: string
}

export type Like = {
  id: number
  name: string
}

export interface Qualification {
  id: number
  name: string
  org: string
  url: string
  date: string
  note: string
}
