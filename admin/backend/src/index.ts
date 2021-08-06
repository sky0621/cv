import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.get('/basic', async (req, res) => {
    const basics = await prisma.basic.findMany()
    res.json(basics)
})

app.get('/basic/:id', async (req, res) => {
    const { id }: { id?: string } = req.params
    const basic = await prisma.basic.findUnique({
        where: { id: Number(id) },
    })
    res.json(basic)
})

app.listen(3002, () => console.log('start server at :3002'))
