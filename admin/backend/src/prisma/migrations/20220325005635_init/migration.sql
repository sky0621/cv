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
    "order" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "NoteItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "noteId" INTEGER NOT NULL,
    CONSTRAINT "NoteItem_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "Note" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Career" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "explanation" TEXT,
    "fromYYYYMM" INTEGER NOT NULL,
    "toYYYYMM" INTEGER,
    "task" TEXT,
    "careerGroupId" INTEGER NOT NULL,
    CONSTRAINT "Career_careerGroupId_fkey" FOREIGN KEY ("careerGroupId") REFERENCES "CareerGroup" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "CareerGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "CareerGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "CareerSkillVersionRelation" (
    "careerId" INTEGER NOT NULL,
    "skillVersionId" INTEGER NOT NULL,

    PRIMARY KEY ("careerId", "skillVersionId"),
    CONSTRAINT "CareerSkillVersionRelation_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "Career" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "CareerSkillVersionRelation_skillVersionId_fkey" FOREIGN KEY ("skillVersionId") REFERENCES "SkillVersion" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SkillDescription" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "skillId" INTEGER NOT NULL,
    "description" TEXT,
    CONSTRAINT "SkillDescription_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "SkillGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SkillGroupRelation" (
    "skillId" INTEGER NOT NULL,
    "skillGroupId" INTEGER NOT NULL,

    PRIMARY KEY ("skillId", "skillGroupId"),
    CONSTRAINT "SkillGroupRelation_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "SkillGroupRelation_skillGroupId_fkey" FOREIGN KEY ("skillGroupId") REFERENCES "SkillGroup" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "SkillKind" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SkillKindRelation" (
    "skillId" INTEGER NOT NULL,
    "skillKindId" INTEGER NOT NULL,

    PRIMARY KEY ("skillId", "skillKindId"),
    CONSTRAINT "SkillKindRelation_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "SkillKindRelation_skillKindId_fkey" FOREIGN KEY ("skillKindId") REFERENCES "SkillKind" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "SkillVersion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "version" TEXT NOT NULL,
    "skillId" INTEGER,
    CONSTRAINT "SkillVersion_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "UserSkillGroupRelation" (
    "userId" INTEGER NOT NULL,
    "skillGroupId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    PRIMARY KEY ("userId", "skillGroupId"),
    CONSTRAINT "UserSkillGroupRelation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "UserSkillGroupRelation_skillGroupId_fkey" FOREIGN KEY ("skillGroupId") REFERENCES "SkillGroup" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "UserSkillKindRelation" (
    "userId" INTEGER NOT NULL,
    "skillKindId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    PRIMARY KEY ("userId", "skillKindId"),
    CONSTRAINT "UserSkillKindRelation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "UserSkillKindRelation_skillKindId_fkey" FOREIGN KEY ("skillKindId") REFERENCES "SkillKind" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateIndex
CREATE UNIQUE INDEX "User_codeName_key" ON "User"("codeName");

-- CreateIndex
CREATE UNIQUE INDEX "Basic_userId_key" ON "Basic"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Note_order_key" ON "Note"("order");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_uindex" ON "Skill"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SkillDescription_skillId_uindex" ON "SkillDescription"("skillId");

-- CreateIndex
CREATE UNIQUE INDEX "SkillGroup_label_uindex" ON "SkillGroup"("label");

-- CreateIndex
CREATE UNIQUE INDEX "SkillKind_name_uindex" ON "SkillKind"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UserSkillGroupRelation_order_uindex" ON "UserSkillGroupRelation"("order");

-- CreateIndex
CREATE UNIQUE INDEX "UserSkillKindRelation_order_uindex" ON "UserSkillKindRelation"("order");
