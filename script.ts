import { prisma } from "./lib/prisma";

async function main() {
    const card = await prisma.flashcard.create({
        data: {
            danish: "hej",
            english: "hello",
            },
    });

    console.log("Created:", card);

    const cards = await prisma.flashcard.findMany();

    console.log("All cards:", cards);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });