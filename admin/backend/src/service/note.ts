import {PrismaClient} from '@prisma/client'
import {NoteModel} from "../types";
import fs from "fs";

export class NoteService {
    client: PrismaClient

    constructor(client: PrismaClient) {
        this.client = client
    }

    async create(noteModel: NoteModel): Promise<void> {
        if (!noteModel) return

        const already = await this.findByUserId(noteModel.userId)
        if (already.filter((n) => n && n.label === noteModel.label).length > 0) {
            return
        }

        await this.client.$transaction([
            this.client.note.create({
                data: {
                    label: noteModel.label,
                    showNow: noteModel.showNow,
                    isMultipleLine: noteModel.isMultipleLine,
                    memo: noteModel.memo,
                    order: noteModel.order,
                    userId: noteModel.userId,
                    items: {create: noteModel.items},
                },
            })
        ])
    }

    async findByUserId(userId: number): Promise<NoteModel[]> {
        return this.client.note.findMany({
            where: {userId: userId},
            include: {items: true},
        })
    }

    async update(noteModel: NoteModel): Promise<void> {
        if (!noteModel) return

        const before = await this.findByUserId(noteModel.userId)
        if (before.length === 0) {
            return
        }

        await this.client.$transaction([
            this.client.noteItem.deleteMany({where: {noteId: {in: noteModel.id}}}),

            this.client.note.update({
                where: {id: Number(noteModel.id) || undefined},
                data: {
                    label: noteModel.label,
                    showNow: noteModel.showNow,
                    isMultipleLine: noteModel.isMultipleLine,
                    memo: noteModel.memo,
                    order: noteModel.order,
                    userId: noteModel.userId,
                    items: {create: noteModel.items},
                },
            })
        ])
    }

    async apply(userId: number): Promise<void> {
        const note = await this.findByUserId(userId)
        fs.writeFileSync('../../app/public/data/note.json', JSON.stringify(note, null, 2))
    }
}
