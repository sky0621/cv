import {PrismaClient} from "@prisma/client";

export class CareerService {
    client: PrismaClient

    constructor(client: PrismaClient) {
        this.client = client
    }

}
