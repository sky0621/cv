import {Basic} from "./basic";
import {Note} from "./note";

export type User = {
    id: number
    codeName: string
    basic?: Basic
    note?: Note
}