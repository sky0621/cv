import {PrismaClient} from '@prisma/client'
import {Note} from '../types/note'

export class NoteService {
    client: PrismaClient

    constructor(client: PrismaClient) {
        this.client = client
    }

    async findById(id: string): Promise<Note | null> {
        const noteModel = await this.client.note.findUnique({
            where: {id: Number(id)},
            include: {items: true}
        })
        if (!noteModel) {
            return null
        }

        return {} as Note
    }
}
