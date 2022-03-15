import express from 'express'
import cors from 'cors'
import {PrismaClient} from '@prisma/client'
import {UserService} from "./service/user";
import {BasicService} from './service/basic'
import {NoteService} from './service/note'
import {Basic, Like, Output, Qualification} from "./types/basic";
import {Note} from "./types/note"
import {User} from "./types/user";

const app = express()
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient()
const userService = new UserService(prisma)
const basicService = new BasicService(prisma)
const noteService = new NoteService(prisma)

// ------------------------------------------------------------------
// User
// ------------------------------------------------------------------

app.post('/user', async (req, res) => {
    try {
        const {codeName} = req.body
        const created = await userService.create(codeName)

        return res.status(201).json(created)
    } catch (e) {
        return res.status(500).json({error: e})
    }
})

app.get('/user/:codeName', async (req, res) => {
    try {
        const {codeName} = req.params
        const user: User | null = await userService.findByCodeName(codeName)
        return res.status(200).json(user)
    } catch (e) {
        return res.status(500).json({error: e})
    }
})
// ------------------------------------------------------------------
// Basic
// ------------------------------------------------------------------

app.get('/basic/:id', async (req, res) => {
    try {
        const {id}: { id?: string } = req.params
        const basic: Basic | null = await basicService.findById(id)
        if (!basic) {
            return res.json({})
        }
        return res.status(200).json(basic)
    } catch (e) {
        return res.status(500).json({error: e})
    }
})

app.put('/basic/:id', async (req, res) => {
    try {
        const {id}: { id?: string } = req.params
        const {nickname, birthday, job, belongTo, outputs, likes, qualifications} = req.body

        const outputModels: Output[] = outputs.map((o: {
            name: string;
            url: string;
            icon: string;
        }) => ({
            name: o.name,
            url: o.url,
            icon: o.icon
        } as Output))

        const likeModels: Like[] = likes.map((l: String) => ({
            name: l,
        } as Like))

        const qualificationModels: Qualification[] = qualifications.map((q: {
            name: string
            org: string
            url: string
            date: string
            note: string
        }) => ({
            name: q.name,
            org: q.org,
            url: q.url,
            date: q.date,
            note: q.note,
        }))

        const basicModel: Basic = {
            id: id as unknown as number,
            nickname,
            birthday,
            job,
            belongTo,
            outputs: outputModels,
            likes: likeModels,
            qualifications: qualificationModels,
        }

        const updatedBasic = await basicService.update(basicModel)

        console.log(updatedBasic)

        return res.status(200).json(updatedBasic)
    } catch (e) {
        console.log(e)
        return res.status(500).json({error: e})
    }
})

// ------------------------------------------------------------------
// Note
// ------------------------------------------------------------------

app.get('/note/:id', async (req, res) => {
    try {
        const {id}: { id?: string } = req.params
        const note: Note | null = await noteService.findById(id)
        if (!note) {
            return res.json({})
        }
        return res.status(200).json(note)
    } catch (e) {
        return res.status(500).json({error: e})
    }
})

// ------------------------------------------------------------------
// Skill
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// Career
// ------------------------------------------------------------------

app.listen(3002, () => console.log('start server at :3002'))
