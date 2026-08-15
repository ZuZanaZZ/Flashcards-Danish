import "./App.css"
import React from "react"
import Card from "./Card"
import Data from "./data.json"
import Navbar from "./Navbar"

type Category = keyof typeof Data;

type Flashcard = {
  id: number;
  english: string;
  danish: string;
};

function App() {
  const [index, setIndex] = React.useState(0);
  const [category, setCategory] = React.useState<Category>("Hv-words");

  const [flashcards, setFlashcards] = React.useState<Flashcard[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const items = Data[category];

  React.useEffect(() => {
    setIndex(0);
  }, [category]);

  React.useEffect(() => {
    async function getFlashcards() {
      try {
        const response = await fetch("/api/flashcards");

        if (!response.ok) {
          throw new Error("Failed to fetch flashcards");
        }

        const data: Flashcard[] = await response.json();

        setFlashcards(data);
      } catch (error) {
        console.error(error);
        setError("Could not load flashcards");
      } finally {
        setLoading(false);
      }
    }

    getFlashcards();
  }, []);

  function handleRight() {
    setIndex(i => (i + 1) % Data[category].length);
  }

  function handleLeft() {
    setIndex(i => (i - 1 + Data[category].length) % Data[category].length);
  }

  return (
    <div className="flex flex-col h-screen w-screen">
      <h1 className="mx-8 mt-8 pl-2 text-left text-xl md:text-2xl">
        Flashcards for Danish
      </h1>

      <div className="flex flex-col grow md:flex-row">
        <Navbar setCategory={setCategory}/>

        <main className="m-8 flex flex-col grow items-center">

          {loading && <p>Loading...</p>}

          {error && <p>{error}</p>}

          {!loading && !error && flashcards.length > 0 && (
            <Card
              frontSide={flashcards[0].english}
              backSide={flashcards[0].danish}
            />
          )}

          {!loading && !error && flashcards.length === 0 && (
            <p>No flashcards found.</p>
          )}

          <div className="mt-8 flex gap-16 items-center">
            <button
              onClick={handleLeft}
              className="border button px-4 py-2 text-2xl md:text-4xl"
            >
              &lt;
            </button>

            <p className="text-xl md:text-2xl">
              Database proof of concept
            </p>

            <button
              onClick={handleRight}
              className="border button px-4 py-2 text-2xl md:text-4xl"
            >
              &gt;
            </button>
          </div>

        </main>
      </div>
    </div>
  )
}

export default App