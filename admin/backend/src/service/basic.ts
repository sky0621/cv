//import {PrismaClient} from '../generated/prisma-client-js'
import {PrismaClient} from '@prisma/client'
import {Basic, Output, Qualification} from '../types/basic'

export class BasicService {
    client: PrismaClient

    constructor(client: PrismaClient) {
        this.client = client
    }

    async findById(id: string): Promise<Basic | null> {
        const basicModel = await this.client.basic.findUnique({
            where: {id: Number(id)},
            include: {likes: true, outputs: true, qualifications: true,},
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
            likes: basicModel.likes.map(l => l.name),
            outputs: basicModel.outputs.map(o => ({
                id: o.id,
                name: o.name,
                url: o.url,
                icon: o.icon
            } as Output)),
            qualifications: basicModel.qualifications.map(q => ({
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

        // FIXME: use transaction

    }
}