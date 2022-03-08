-- CreateTable
CREATE TABLE "Basic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nickname" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "belong_to" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Like" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Output" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "icon" TEXT
);

-- CreateTable
CREATE TABLE "Qualification" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "org" TEXT,
    "url" TEXT,
    "date" TEXT,
    "note" TEXT
);

-- CreateTable
CREATE TABLE "_BasicToLike" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Basic" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Like" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_BasicToOutput" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Basic" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Output" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_BasicToQualification" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Basic" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Qualification" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_BasicToLike_AB_unique" ON "_BasicToLike"("A", "B");

-- CreateIndex
CREATE INDEX "_BasicToLike_B_index" ON "_BasicToLike"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BasicToOutput_AB_unique" ON "_BasicToOutput"("A", "B");

-- CreateIndex
CREATE INDEX "_BasicToOutput_B_index" ON "_BasicToOutput"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BasicToQualification_AB_unique" ON "_BasicToQualification"("A", "B");

-- CreateIndex
CREATE INDEX "_BasicToQualification_B_index" ON "_BasicToQualification"("B");
