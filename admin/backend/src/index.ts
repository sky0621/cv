import express from 'express'
import cors from 'cors'
import {PrismaClient} from '@prisma/client'
import {BasicService} from './basic'

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
    const basic = await basicService.findById(id)
    console.log(basic)
    res.json(basic)
})

app.put('/basic/:id', async (req, res) => {
    const {id}: { id?: string } = req.params
    console.log(id)
    const {nickname, birthday, job, belongTo} = req.body
    try {
        const updatedBasic = basicService.updateById(id, nickname, birthday, job, belongTo)
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
