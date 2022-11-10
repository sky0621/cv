export type Attribute = {
  id: number
  name: string
  nickname: string
  avatarUrl: string
  birthday: Birthday
  job: string
  belongTo: string
  pr: string
}

export type Birthday = {
  year: number
  month: number
  day: number
}
