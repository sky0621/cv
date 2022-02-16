export type Note = {
    summary: string
    status: string
    conditions: string[]
    wishes: string[]
    studying: Studying
    interest: string[]
}

export type Studying = {
    summary: string
    items: string[]
}
