-- CreateTable
CREATE TABLE "Flashcard" (
    "id" SERIAL NOT NULL,
    "danish" TEXT NOT NULL,
    "english" TEXT NOT NULL,

    CONSTRAINT "Flashcard_pkey" PRIMARY KEY ("id")
);
