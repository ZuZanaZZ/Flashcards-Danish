import "./App.css"
import Card from "./Card"
import Data from "./data.json"
import React from "react"
import Navbar from "./Navbar"

function App() {
  const [index, setIndex] = React.useState(0);

  function handleRight() {
    setIndex(i => (i + 1) % Data.length);
  }

  function handleLeft() {
    setIndex(i => (i - 1 + Data.length) % Data.length);
  }

  return (
    <div className="flex flex-col sm:flex-row w-screen h-screen">
      <Navbar/>
      <div className="flex flex-col items-center sm:w-full m-16 sm:mt-32">
        <Card frontSide={Data[index].english} backSide={Data[index].danish}/>
        <div className="mt-8 text-2xl md:text-4xl space-x-32">
          <button onClick={handleLeft} className="button">◁</button>
          <button onClick={handleRight} className="button">▷</button>
        </div>
      </div>
    </div>
  )
}

export default App
