import {PrismaClient} from '@prisma/client'
import {Basic, Like, Output, Qualification} from '../types/basic'

export class BasicService {
    client: PrismaClient

    constructor(client: PrismaClient) {
        this.client = client
    }

    async findById(id: string): Promise<Basic | null> {
        const basicModel = await this.client.basic.findUnique({
            where: {id: Number(id)},
            include: {likes: true, outputs: true, qualifications: true},
        })
        if (!basicModel) {
            return null
        }

        return {
            id: basicModel.id,
            nickname: basicModel.nickname,
            birthday: basicModel.birthday,
            job: basicModel.job,
            belongTo: basicModel.belong_to,

            outputs: basicModel.outputs?.map(o => ({
                id: o.id,
                name: o.name,
                url: o.url,
                icon: o.icon
            } as Output)),
            likes: basicModel.likes?.map(l => ({
                id: l.id,
                name: l.name,
            } as Like)),
            qualifications: basicModel.qualifications?.map(q => ({
                id: q.id,
                name: q.name,
                org: q.org,
                url: q.url,
                date: q.date,
                note: q.note
            } as Qualification))
        }
    }

    async updateById(basicModel: Basic): Promise<any> {
        const before = await this.findById(String(basicModel.id))
        if (!before) {
            return
        }

        await this.client.$transaction([
            this.client.output.deleteMany({where: {id: {in: before.outputs?.map(o => o.id)}}}),
            this.client.like.deleteMany({where: {id: {in: before.likes?.map(l => l.id)}}}),
            this.client.qualification.deleteMany({where: {id: {in: before.qualifications?.map(q => q.id)}}}),

            this.client.basic.update({
                where: {id: Number(basicModel.id) || undefined},
                data: {
                    nickname: basicModel.nickname,
                    birthday: basicModel.birthday,
                    job: basicModel.job,
                    belong_to: basicModel.belongTo,

                    outputs: {
                        create:
                            basicModel.outputs?.map(o => ({
                                name: o.name,
                                url: o.url,
                                icon: o.icon,
                            })),
                    },

                    likes: {
                        create:
                            basicModel.likes?.map(l => ({
                                name: l.name,
                            })),
                    },

                    qualifications: {
                        create:
                            basicModel.qualifications?.map(q => ({
                                name: q.name,
                                org: q.org,
                                url: q.url,
                                date: q.date,
                                note: q.note,
                            }))
                    }
                },
            }),
        ])
    }
}