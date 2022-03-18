import express from 'express'
import cors from 'cors'
import {PrismaClient} from '@prisma/client'
import {UserService} from "./service/user";
import {BasicService} from './service/basic'
import {NoteService} from './service/note'
import {BasicModel} from "./types";

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

// ユーザーコード名の新規登録
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

// 指定ユーザー取得
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

// 基礎情報の新規登録
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

// 基礎情報の取得
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
        return res.status(500).json({error: e})
    }
})

// 基礎情報の更新
/*app.put('/user/:codeName/basic', async (req, res) => {
    try {
        const {codeName}: { codeName: string } = req.params
        const user = await userService.findByCodeName(codeName)
        if (!user) {
            return res.status(500).json({error: 'unknown'})
        }

        const {nickname, birthday, job, belongTo, outputs, likes, qualifications} = req.body
        const basicModel = toBasic(nickname, birthday, job, belongTo, outputs, likes, qualifications)

        const basic = await basicService.update(user.id, basicModel)
        if (!basic) {
            return res.status(500).json({error: 'unknown'})
        }
        return res.status(200).json(basic)
    } catch (e) {
        console.log(e)
        return res.status(500).json({error: e})
    }
})*/

// ------------------------------------------------------------------
// Note
// ------------------------------------------------------------------

/*app.get('/note/:id', async (req, res) => {
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
})*/

// ------------------------------------------------------------------
// Skill
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// Career
// ------------------------------------------------------------------

app.listen(3002, () => console.log('start server at :3002'))
