import "./App.css"
import Card from "./Card"
import Data from "./data.json"
import React from "react"

function App() {
  const [index, setIndex] = React.useState(0);

  function handleRight() {
    setIndex(i => (i + 1) % Data.length);
  }

  function handleLeft() {
    setIndex(i => (i - 1 + Data.length) % Data.length);
  }

  return (
    <>
      <div className="grid w-full h-full place-items-center gap-8">
        <h1 className="text-pink-900 text-2xl sm:text-4xl lg:text-8xl">Flashcards for Danish</h1>
        <Card frontSide={Data[index].english} backSide={Data[index].danish}/>
        <div className="flex text-4xl gap-16">
          <button onClick={handleLeft} className="text-pink-900 cursor-pointer">&lt;</button>
          <button onClick={handleRight} className="text-pink-900 cursor-pointer">&gt;</button>
        </div>
      </div>
    </>
  )
}

export default App
