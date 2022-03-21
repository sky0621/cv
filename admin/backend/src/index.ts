import express from 'express'
import cors from 'cors'
import {PrismaClient} from '@prisma/client'
import {UserService} from "./service/user";
import {BasicService} from './service/basic'
import {NoteService} from './service/note'
import {BasicModel, NoteModel} from "./types";

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
        if (created === null) {
            return res.status(400).json({})
        }
        return res.status(201).json(created)
    } catch (e) {
        return res.status(500).json({error: e})
    }
})

app.get('/user/:codeName', async (req, res) => {
    try {
        const {codeName} = req.params
        const user = await userService.findByCodeName(codeName)
        if (user === null) {
            return res.status(404).json({})
        }
        return res.status(200).json(user)
    } catch (e) {
        return res.status(500).json({error: e})
    }
})

// ------------------------------------------------------------------
// Basic
// ------------------------------------------------------------------

app.post('/user/:codeName/basic', async (req, res) => {
    try {
        const {codeName}: { codeName: string } = req.params
        const user = await userService.findByCodeName(codeName)
        if (user === null) {
            return res.status(400).json({})
        }

        const {nickname, birthday, job, belongTo, outputs, likes, qualifications} = req.body
        const param = {nickname, birthday, job, belongTo, userId: user.id, outputs, likes, qualifications} as BasicModel
        const basic = await basicService.create(param)
        if (!basic) {
            return res.status(400).json({})
        }
        return res.status(200).json(basic)
    } catch (e) {
        console.log(e)
        return res.status(500).json({error: e})
    }
})

app.get('/user/:codeName/basic', async (req, res) => {
    try {
        const {codeName}: { codeName: string } = req.params
        const user = await userService.findByCodeName(codeName)
        if (!user) {
            return res.status(500).json({error: 'unknown'})
        }

        const basic: BasicModel = await basicService.findByUserId(user.id)
        if (!basic) {
            return res.status(404).json({})
        }
        return res.status(200).json(basic)
    } catch (e) {
        console.log(e)
        return res.status(500).json({error: e})
    }
})

app.put('/user/:codeName/basic', async (req, res) => {
    try {
        const {codeName}: { codeName: string } = req.params
        const user = await userService.findByCodeName(codeName)
        if (user === null) {
            return res.status(400).json({})
        }

        const {nickname, birthday, job, belongTo, outputs, likes, qualifications} = req.body
        const param = {nickname, birthday, job, belongTo, userId: user.id, outputs, likes, qualifications} as BasicModel
        const basic = await basicService.update(param)
        if (!basic) {
            return res.status(400).json({})
        }
        return res.status(200).json(basic)
    } catch (e) {
        console.log(e)
        return res.status(500).json({error: e})
    }
})

// ------------------------------------------------------------------
// Note
// ------------------------------------------------------------------

app.post('/user/:codeName/note', async (req, res) => {
    try {
        const {codeName}: { codeName: string } = req.params
        const user = await userService.findByCodeName(codeName)
        if (user === null) {
            return res.status(400).json({})
        }

        const {label, showNow, isMultipleLine, memo, order, items} = req.body
        const param = {label, showNow, isMultipleLine, memo, order, userId: user.id, items} as NoteModel
        const note = await noteService.create(param)
        if (!note) {
            return res.status(400).json({})
        }
        return res.status(200).json(note)
    } catch (e) {
        console.log(e)
        return res.status(500).json({error: e})
    }
})

app.get('/user/:codeName/note', async (req, res) => {
    try {
        const {codeName}: { codeName: string } = req.params
        const user = await userService.findByCodeName(codeName)
        if (!user) {
            return res.status(500).json({error: 'unknown'})
        }

        const notes: NoteModel[] = await noteService.findByUserId(user.id)
        if (!notes) {
            return res.status(404).json({})
        }
        return res.status(200).json(notes)
    } catch (e) {
        console.log(e)
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
