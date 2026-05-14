import "./App.css"
import Card from "./Card"
import Data from "./data.json"

function App() {
  return (
    <>
      <div className="grid w-full h-full place-items-center gap-8">
        <h1 className="text-pink-900 text-2xl sm:text-4xl lg:text-8xl">Flashcards for Danish</h1>
          <Card frontSide={Data[1].english} backSide={Data[1].danish}/>
      </div>
    </>
  )
}

export default App
