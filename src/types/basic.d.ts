export default interface Basic {
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
}

export interface Qualification {
  name: string
  url: string
  date: string
  note: string
}
