import {Basic, Like, Note, NoteItem, Output, Qualification, Skill, SkillVersion, User} from "@prisma/client";

export type UserModel = User | null
export type BasicModel = Basic & { outputs: Output[], likes: Like[], qualifications: Qualification[] } | null
export type NoteModel = Note & { items: NoteItem[] } | null
export type SkillModel = Skill & { SkillVersion: SkillVersion[] } | null
