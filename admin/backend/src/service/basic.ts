import {PrismaClient} from '@prisma/client'
import {BasicModel} from "../types";
import * as fs from "fs";

export class BasicService {
    client: PrismaClient

    constructor(client: PrismaClient) {
        this.client = client
    }

    async create(basicModel: BasicModel): Promise<void> {
        if (!basicModel) return

        const already = await this.findByUserId(basicModel.userId)
        if (already !== null) {
            return
        }

        await this.client.$transaction([
            this.client.basic.create({
                data: {
                    nickname: basicModel.nickname,
                    birthday: basicModel.birthday,
                    job: basicModel.job,
                    belongTo: basicModel.belongTo,
                    userId: basicModel.userId,
                    outputs: {create: basicModel.outputs},
                    likes: {create: basicModel.likes},
                    qualifications: {create: basicModel.qualifications}
                },
            })
        ])
    }

    async findByUserId(userId: number): Promise<BasicModel> {
        return this.client.basic.findUnique({
            where: {userId: userId},
            include: {likes: true, outputs: true, qualifications: true},
        })
    }

    async update(basicModel: BasicModel): Promise<void> {
        if (!basicModel) return

        const before = await this.findByUserId(basicModel.userId)
        if (before === null) {
            return
        }

        await this.client.$transaction([
            this.client.output.deleteMany({where: {id: {in: before.outputs?.map(o => o.id)}}}),
            this.client.like.deleteMany({where: {id: {in: before.likes?.map(l => l.id)}}}),
            this.client.qualification.deleteMany({where: {id: {in: before.qualifications?.map(q => q.id)}}}),

            this.client.basic.update({
                where: {id: Number(before.id) || undefined},
                data: {
                    nickname: basicModel.nickname,
                    birthday: basicModel.birthday,
                    job: basicModel.job,
                    belongTo: basicModel.belongTo,
                    userId: basicModel.userId,
                    outputs: {create: basicModel.outputs},
                    likes: {create: basicModel.likes},
                    qualifications: {create: basicModel.qualifications}
                },
            }),
        ])
    }

    async apply(userId: number): Promise<void> {
        const basic = await this.findByUserId(userId)
        fs.writeFileSync('../../app/public/data/basic.json', JSON.stringify(basic, null, 2))
    }
}