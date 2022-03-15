-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codeName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Basic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nickname" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "belongTo" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Basic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Like" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "basicId" INTEGER NOT NULL,
    CONSTRAINT "Like_basicId_fkey" FOREIGN KEY ("basicId") REFERENCES "Basic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Output" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "icon" TEXT,
    "basicId" INTEGER NOT NULL,
    CONSTRAINT "Output_basicId_fkey" FOREIGN KEY ("basicId") REFERENCES "Basic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Qualification" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "org" TEXT,
    "url" TEXT,
    "date" TEXT,
    "note" TEXT,
    "basicId" INTEGER NOT NULL,
    CONSTRAINT "Qualification_basicId_fkey" FOREIGN KEY ("basicId") REFERENCES "Basic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Note" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "showNow" BOOLEAN NOT NULL DEFAULT false,
    "isMultipleLine" BOOLEAN NOT NULL DEFAULT false,
    "memo" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "NoteItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "noteId" INTEGER NOT NULL,
    CONSTRAINT "NoteItem_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "Note" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_codeName_key" ON "User"("codeName");

-- CreateIndex
CREATE UNIQUE INDEX "Basic_userId_key" ON "Basic"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Note_userId_key" ON "Note"("userId");
