import "./App.css"
import Card from "./Card"
import Data from "./data.json"
import React from "react"
import Navbar from "./Navbar"

type Category = keyof typeof Data;

function App() {
  const [category, setCategory] = React.useState<Category>("Food");
  const [index, setIndex] = React.useState(0);

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
      <h1 className="mx-8 mt-8 text-left text-pink-900 text-2xl md:text-4xl">Flashcards for Danish</h1>
      <div className="flex flex-col grow md:flex-row">
      <Navbar setCategory={setCategory}/>
        <div className="m-8 flex flex-col grow items-center">
          <Card frontSide={Data[category][index].english} backSide={Data[category][index].danish}/>
          <div className="mt-8 flex gap-16 text-2xl md:text-4xl">
            <button onClick={handleLeft} className="border button px-4 py-2">◁</button>
            <button onClick={handleRight} className="border button px-4 py-2">▷</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
