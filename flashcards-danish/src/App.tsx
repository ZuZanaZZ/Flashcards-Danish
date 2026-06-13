import "./App.css"
import React from "react"
import Card from "./Card"
import Data from "./data.json"
import Navbar from "./Navbar"

type Category = keyof typeof Data;

function App() {
  const [index, setIndex] = React.useState(0);
  const [category, setCategory] = React.useState<Category>("Hv-words");
  const items = Data[category];
  const safeIndex = Math.min(index, items.length - 1);  

  React.useEffect(() => {
    setIndex(0);
  }, [category]);

  function handleRight() {
    setIndex(i => (i + 1) % Data[category].length);
  }

  function handleLeft() {
    setIndex(i => (i - 1 + Data[category].length) % Data[category].length);
  }

  return (
    <div className="flex flex-col h-screen w-screen">
      <h1 className="mx-8 mt-8 pl-2 text-left text-xl md:text-2xl">Flashcards for Danish</h1>
      <div className="flex flex-col grow md:flex-row">
        <Navbar setCategory={setCategory}/>
        <main className="m-8 flex flex-col grow items-center">
          <Card frontSide={Data[category][safeIndex].english} backSide={Data[category][safeIndex].danish}/>
          <div className="mt-8 flex gap-16 items-center">
            <button onClick={handleLeft} className="border button px-4 py-2 text-2xl md:text-4xl">&lt;</button>
            <p className="text-xl md:text-2xl">{safeIndex + 1}/{Data[category].length}</p>
            <button onClick={handleRight} className="border button px-4 py-2 text-2xl md:text-4xl">&gt;</button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
