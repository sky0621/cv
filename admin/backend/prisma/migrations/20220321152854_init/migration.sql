/*
  Warnings:

  - Added the required column `order` to the `NoteItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Note` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_NoteItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "noteId" INTEGER NOT NULL,
    CONSTRAINT "NoteItem_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "Note" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_NoteItem" ("id", "noteId", "text") SELECT "id", "noteId", "text" FROM "NoteItem";
DROP TABLE "NoteItem";
ALTER TABLE "new_NoteItem" RENAME TO "NoteItem";
CREATE UNIQUE INDEX "NoteItem_order_key" ON "NoteItem"("order");
CREATE TABLE "new_Note" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "showNow" BOOLEAN NOT NULL DEFAULT false,
    "isMultipleLine" BOOLEAN NOT NULL DEFAULT false,
    "memo" TEXT,
    "order" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Note" ("id", "isMultipleLine", "label", "memo", "showNow", "userId") SELECT "id", "isMultipleLine", "label", "memo", "showNow", "userId" FROM "Note";
DROP TABLE "Note";
ALTER TABLE "new_Note" RENAME TO "Note";
CREATE UNIQUE INDEX "Note_order_key" ON "Note"("order");
CREATE UNIQUE INDEX "Note_userId_key" ON "Note"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
