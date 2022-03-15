import {PrismaClient} from '@prisma/client'
import {User} from "../types/user";

export class UserService {
    client: PrismaClient

    constructor(client: PrismaClient) {
        this.client = client
    }

    async create(codeName: string): Promise<User | null> {
        return this.client.user.create({data: {codeName: codeName}})
    }

    async findByCodeName(codeName: string): Promise<User | null> {
        const userModel = await this.client.user.findUnique({
            where: {codeName: codeName},
        })
        if (!userModel) {
            return null
        }
        return {
            id: userModel.id,
            codeName: userModel.codeName,
        } as User
    }
}

