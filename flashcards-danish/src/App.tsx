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
    <div className="flex flex-col sm:flex-row w-screen h-screen">
      <Navbar setCategory={setCategory} />
      <div className="flex flex-col items-center sm:w-full m-16 sm:mt-32">
        <Card frontSide={Data[category][index].english} backSide={Data[category][index].danish}/>
        <div className="mt-8 text-2xl md:text-4xl space-x-32">
          <button onClick={handleLeft} className="border button">◁</button>
          <button onClick={handleRight} className="border button">▷</button>
        </div>
      </div>
    </div>
  )
}

export default App
