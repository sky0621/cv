import {PrismaClient} from '@prisma/client'
import {UserModel} from "../types/user";

export class UserService {
    client: PrismaClient

    constructor(client: PrismaClient) {
        this.client = client
    }

    async create(codeName: string): Promise<UserModel> {
        const already = this.findByCodeName(codeName)
        if (already !== null) {
            return null
        }
        return this.client.user.create({data: {codeName: codeName}})
    }

    async findByCodeName(codeName: string): Promise<UserModel> {
        return await this.client.user.findUnique({where: {codeName: codeName}})
    }
}

