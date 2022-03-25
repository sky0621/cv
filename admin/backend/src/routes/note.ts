import {NoteModel} from "../types";
import {Express} from "express";
import {UserService} from "../service/user";
import {NoteService} from "../service/note";

export const setupNoteRoutes = (app: Express, userService: UserService, noteService: NoteService) => {
    app.post('/users/:codeName/notes', async (req, res) => {
        try {
            const {codeName}: { codeName: string } = req.params
            const user = await userService.findByCodeName(codeName)
            if (user === null) {
                return res.status(400).json({})
            }

            const {label, showNow, isMultipleLine, memo, order, items} = req.body
            const param = {label, showNow, isMultipleLine, memo, order, userId: user.id, items} as NoteModel

            await noteService.create(param)

            return res.status(201).json()
        } catch (e) {
            console.log(e)
            return res.status(500).json({error: e})
        }
    })

    app.get('/users/:codeName/notes', async (req, res) => {
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

    app.put('/users/:codeName/notes/:id', async (req, res) => {
        try {
            const {codeName}: { codeName: string } = req.params
            const user = await userService.findByCodeName(codeName)
            if (user === null) {
                return res.status(400).json({})
            }

            const {id}: { id: string } = req.params
            const {label, showNow, isMultipleLine, memo, order, items} = req.body
            const param = {
                id: Number(id),
                label,
                showNow,
                isMultipleLine,
                memo,
                order,
                userId: user.id,
                items
            } as NoteModel

            await noteService.update(param)

            return res.status(200).json()
        } catch (e) {
            console.log(e)
            return res.status(500).json({error: e})
        }
    })

    app.put('/users/:codeName/apply/notes', async (req, res) => {
        try {
            const {codeName}: { codeName: string } = req.params
            const user = await userService.findByCodeName(codeName)
            if (user === null) {
                return res.status(500).json({})
            }

            await noteService.apply(user.id)

            return res.status(200).json()
        } catch (e) {
            console.log(e)
            return res.status(500).json({error: e})
        }
    })

}