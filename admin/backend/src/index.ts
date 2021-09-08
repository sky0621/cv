import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

// ------------------------------------------------------------------
// Basic
// ------------------------------------------------------------------

app.get('/basic/:id', async (req, res) => {
    const { id }: { id?: string } = req.params
    console.log(id)
    const basic = await prisma.basic.findUnique({
        where: { id: Number(id) },
        include: {
            basic_output_relation: {
                include: {
                    output: true,
                },
            },
            basic_like_relation: {
                include: {
                    like: true,
                },
            },
            basic_qualification_relation: {
                include: {
                    qualification: true,
                },
            },
        },
    })
    console.log(basic)
    res.json(basic)
})

app.put('/basic/:id', async (req, res) => {
    const { id }: { id?: string } = req.params
    console.log(id)
    const { nickname, birthday, job, belongTo } = req.body
    console.log(req.body)
    try {
        const updatedBasic = await prisma.basic.update({
            where: { id: Number(id) || undefined },
            data: {
                nickname: nickname,
                birthday: birthday,
                job: job,
                belongTo: belongTo,
            },
        })
        res.json(updatedBasic)
    } catch (error) {
        res.json({ error: `Basic with ID ${id} does not exist in the database` })
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
