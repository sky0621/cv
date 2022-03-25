import {UserService} from "../service/user";
import {Express} from "express";

export const setupUserRoutes = (app: Express, userService: UserService) => {
    app.post('/users', async (req, res) => {
        try {
            const {codeName} = req.body
            await userService.create(codeName)

            return res.status(201).json()
        } catch (e) {
            return res.status(500).json({error: e})
        }
    })

    app.get('/users/:codeName', async (req, res) => {
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
}