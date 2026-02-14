import React from "react"
import "./App.css"

function Card() {
  return (
    <div className="flex w-50 sm:w-100 lg:w-200 h-25 sm:h-50 lg:h-100 items-center justify-center border-4 rounded-xl border-solid border-pink-300 text-pink-900 text-xl sm:text-2xl lg:text-4xl"> 
    Front side of the flashcard 
    </div>
  );
}

function App() {
  return (
    <>
      <div className="grid w-full h-full place-items-center gap-8">
        <h1 className="text-pink-900 text-2xl sm:text-4xl lg:text-8xl">Flashcards for Danish</h1>
          <Card/>
      </div>
    </>
  )
}

export default App
