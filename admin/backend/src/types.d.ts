import {Basic, Like, Note, NoteItem, Output, Qualification, User} from "@prisma/client";

export type UserModel = User | null
export type BasicModel = Basic & { outputs: Output[], likes: Like[], qualifications: Qualification[] } | null
export type NoteModel = Note & { items: NoteItem[] } | null
