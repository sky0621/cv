export interface Basic {
  nickname: string
  birthday: string
  job: string
  belongTo: string
  outputs: Output[]
  likes: string[]
  qualifications: Qualification[]
}

export interface Output {
  name: string
  url: string
  icon: string
}

export interface Qualification {
  id: number
  name: string
  org: string
  url: string
  date: string
  note: string
}
