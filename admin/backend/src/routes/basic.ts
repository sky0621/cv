import {BasicModel} from "../types";
import {Express} from "express";
import {UserService} from "../service/user";
import {BasicService} from "../service/basic";

export const setupBasicRoutes = (app: Express, userService: UserService, basicService: BasicService) => {
    app.post('/user/:codeName/basic', async (req, res) => {
        try {
            const {codeName}: { codeName: string } = req.params
            const user = await userService.findByCodeName(codeName)
            if (user === null) {
                return res.status(400).json({})
            }

            const {nickname, birthday, job, belongTo, outputs, likes, qualifications} = req.body
            const param = {
                nickname,
                birthday,
                job,
                belongTo,
                userId: user.id,
                outputs,
                likes,
                qualifications
            } as BasicModel

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
            const param = {
                nickname,
                birthday,
                job,
                belongTo,
                userId: user.id,
                outputs,
                likes,
                qualifications
            } as BasicModel

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

    app.put('/user/:codeName/apply/basic', async (req, res) => {
        try {
            const {codeName}: { codeName: string } = req.params
            const user = await userService.findByCodeName(codeName)
            if (!user) {
                return res.status(500).json({error: 'unknown'})
            }

            await basicService.apply(user.id)

            return res.status(200).json({})
        } catch (e) {
            console.log(e)
            return res.status(500).json({error: e})
        }
    })
}