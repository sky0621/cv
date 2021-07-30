export interface Note {
  summary: string
  status: string
  conditions: string[]
  wishes: string[]
  studying: Studying
  interest: string[]
}

export interface Studying {
  summary: string
  items: string[]
}
