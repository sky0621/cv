import {PrismaClient} from '@prisma/client'
import {UserModel} from "../types";

export class UserService {
    client: PrismaClient

    constructor(client: PrismaClient) {
        this.client = client
    }

    async create(codeName: string): Promise<void> {
        const already = await this.findByCodeName(codeName)
        if (already !== null) {
            return
        }
        await this.client.user.create({data: {codeName: codeName}})
    }

    async findByCodeName(codeName: string): Promise<UserModel> {
        return this.client.user.findUnique({where: {codeName: codeName}})
    }
}

