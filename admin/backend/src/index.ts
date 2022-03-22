import express from 'express'
import cors from 'cors'
import {PrismaClient} from '@prisma/client'
import {UserService} from "./service/user";
import {BasicService} from './service/basic'
import {NoteService} from './service/note'
import {setupUserRoutes} from "./routes/user";
import {setupBasicRoutes} from "./routes/basic";
import {setupNoteRoutes} from "./routes/note";

const app = express()
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient()
const userService = new UserService(prisma)
setupUserRoutes(app, userService)
setupBasicRoutes(app, userService, new BasicService(prisma))
setupNoteRoutes(app, userService, new NoteService(prisma))

app.listen(3002, () => console.log('start server at :3002'))
