import {PrismaClient} from "@prisma/client";
import {SkillModel} from "../types";

export class SkillService {
    client: PrismaClient

    constructor(client: PrismaClient) {
        this.client = client
    }

    async create(skillModel: SkillModel): Promise<void> {
        if (!skillModel) return

        await this.client.$transaction([
            this.client.skill.create({
                data: {
                    name: skillModel.name,
                    SkillVersion: {create: skillModel.SkillVersion}
                }
            })
        ])
    }

    async find(): Promise<SkillModel[]> {
        return this.client.skill.findMany({
            include: {SkillVersion: true},
        })
    }
}
