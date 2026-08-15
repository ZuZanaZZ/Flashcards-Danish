import { prisma } from "../lib/prisma";

export default async function handler(
    req: Request,
    res: {
        status: (code: number) => {
        json: (data: unknown) => void;
        };
    }
    ) {
    try {
        const cards = await prisma.flashcard.findMany();

        res.status(200).json(cards);
    } catch (error) {
        console.error(error);

        res.status(500).json({
        error: "Failed to fetch flashcards",
        });
    }
}
