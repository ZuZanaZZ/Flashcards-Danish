import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid w-full h-full place-items-center gap-8">
        <h1 className="text-pink-950">Flashcards for Danish</h1>
        <div className="flex w-1/2 h-40 items-center justify-center border-4 rounded-xl border-solid border-pink-300 text-pink-950">
          content inside the card
        </div>
      </div>
    </>
  )
}

export default App
