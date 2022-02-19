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
            include: {
                basic_output_relation: {include: {output: true}},
                basic_like_relation: {include: {like: true}},
                basic_qualification_relation: {include: {qualification: true}},
            },
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
            outputs: basicModel.basic_output_relation.map(o => ({
                id: o.output.id,
                name: o.output.name,
                url: o.output.url,
                icon: o.output.icon
            } as Output)),
            likes: basicModel.basic_like_relation.map(l => l.like.name),
            qualifications: basicModel.basic_qualification_relation.map(q => ({
                id: q.qualification.id,
                name: q.qualification.name,
                org: q.qualification.org,
                url: q.qualification.url,
                date: q.qualification.date,
                note: q.qualification.note
            } as Qualification))
        }
    }

    async updateById(basicModel: Basic): Promise<any> {
        return await this.client.basic.update({
            where: {id: Number(basicModel.id) || undefined},
            data: {
                nickname: basicModel.nickname,
                birthday: basicModel.birthday,
                job: basicModel.job,
                belong_to: basicModel.belongTo,
            },
        })
    }
}