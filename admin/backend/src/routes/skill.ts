import {Express} from "express";
import {UserService} from "../service/user";
import {SkillService} from "../service/skill";
import {SkillModel} from "../types";

export const setupSkillRoutes = (app: Express, userService: UserService, skillService: SkillService) => {
    // --------------------------------------------------------------
    // スキル本体
    // --------------------------------------------------------------
    app.post('/skills', async (req, res) => {
        try {
            const {name, versions} = req.body
            const param = {name, SkillVersion: versions} as unknown as SkillModel
            await skillService.create(param)
            return res.status(201).json()
        } catch (e) {
            return res.status(500).json({error: e})
        }
    })

    app.get('/skills', async (req, res) => {
        try {
            const skills = await skillService.find()
            return res.status(200).json(skills)
        } catch (e) {
            return res.status(500).json({error: e})
        }
    })
}
