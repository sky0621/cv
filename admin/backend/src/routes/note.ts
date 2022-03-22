import {NoteModel} from "../types";
import {Express} from "express";
import {UserService} from "../service/user";
import {NoteService} from "../service/note";

export const setupNoteRoutes = (app: Express, userService: UserService, noteService: NoteService) => {
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

    app.put('/user/:codeName/note/:id', async (req, res) => {
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
            const note = await noteService.update(param)
            if (!note) {
                return res.status(400).json({})
            }
            return res.status(200).json(note)
        } catch (e) {
            console.log(e)
            return res.status(500).json({error: e})
        }
    })
}