import express from 'express'
import cors from 'cors'
import {PrismaClient} from '@prisma/client'
import {BasicService} from './service/basic'
import {Basic, Like, Output, Qualification} from "./types/basic";

const app = express()
const prisma = new PrismaClient()
const basicService = new BasicService(prisma)

app.use(express.json())
app.use(cors())

// ------------------------------------------------------------------
// Basic
// ------------------------------------------------------------------

app.get('/basic/:id', async (req, res) => {
    const {id}: { id?: string } = req.params
    const basic: Basic | null = await basicService.findById(id)
    console.log(basic)
    if (!basic) {
        return res.json({})
    }
    return res.json(basic)
})

app.put('/basic/:id', async (req, res) => {
    const {id}: { id?: string } = req.params
    console.log(req.params)
    console.log(req.body)
    const {nickname, birthday, job, belongTo, outputs, likes, qualifications} = req.body
    try {
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

        const updatedBasic = basicService.updateById(basicModel)
        res.json(updatedBasic)
    } catch (error) {
        res.json({error: `Basic with ID ${id} does not exist in the database`})
    }
})

// ------------------------------------------------------------------
// Note
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// Skill
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// Career
// ------------------------------------------------------------------

app.listen(3002, () => console.log('start server at :3002'))
