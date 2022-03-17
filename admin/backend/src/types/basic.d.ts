import {Basic, Like, Output, Qualification} from "@prisma/client";

export type BasicModel = Basic & { outputs: Output[], likes: Like[], qualifications: Qualification[] } | null
