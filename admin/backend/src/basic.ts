import {PrismaClient} from "@prisma/client";

export class BasicService {
    client: PrismaClient

    constructor(client: PrismaClient) {
        this.client = client
    }

    async findById(id: string): Promise<any> {
        return await this.client.basic.findUnique({
            where: {id: Number(id)},
            include: {
                basic_output_relation: {
                    include: {
                        output: true,
                    },
                },
                basic_like_relation: {
                    include: {
                        like: true,
                    },
                },
                basic_qualification_relation: {
                    include: {
                        qualification: true,
                    },
                },
            },
        })
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