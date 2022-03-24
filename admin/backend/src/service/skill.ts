import {PrismaClient} from "@prisma/client";

export class SkillService {
    client: PrismaClient

    constructor(client: PrismaClient) {
        this.client = client
    }

}
