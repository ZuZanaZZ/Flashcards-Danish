import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid w-full h-full place-items-center gap-8">
        <h1 className="text-pink-900 text-8xl">Flashcards for Danish</h1>
        <p className="flex w-200 h-100 items-center justify-center border-4 rounded-xl border-solid border-pink-300 text-pink-900 text-4xl">
          Content inside the card
        </p>
      </div>
    </>
  )
}

export default App
