import {PrismaClient} from "@prisma/client";
import {IBasic} from "../../../types/basic";

export class BasicService {
    client: PrismaClient

    constructor(client: PrismaClient) {
        this.client = client
    }

    async findById(id: string): Promise<IBasic | null> {
        const result = await this.client.basic.findUnique({
            where: {id: Number(id)},
            include: {
                basic_output_relation: {include: {output: true}},
                basic_like_relation: {include: {like: true}},
                basic_qualification_relation: {include: {qualification: true}},
            },
        })
        if (!result) {
            return null
        }
        return {
            id: result.id,
            nickname: result.nickname,
            birthday: result.birthday,
            job: result.job,
            belongTo: result.belong_to
        }
    }

    async updateById(id: string, nickname: string, birthday: string, job: string, belongTo: string): Promise<any> {
        return await this.client.basic.update({
            where: {id: Number(id) || undefined},
            data: {
                nickname: nickname,
                birthday: birthday,
                job: job,
                belong_to: belongTo,
            },
        })
    }
}