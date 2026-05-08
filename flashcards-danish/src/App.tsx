import React from "react"
import Card from "./Card"
import "./App.css"

function App() {
  return (
    <>
      <div className="grid w-full h-full place-items-center gap-8">
        <h1 className="text-pink-900 text-2xl sm:text-4xl lg:text-8xl">Flashcards for Danish</h1>
          <Card frontSide="Bread" backSide="Brød"/>
      </div>
    </>
  )
}

export default App
