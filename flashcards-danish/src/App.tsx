import React from "react"
import "./App.css"

function Card(props: { frontSide: string; backSide: string; }) {
  const [text, setText] = React.useState(props.frontSide);
  function handleClick() {
    setText(props.backSide);
  }
  return (
    <div className="flashcard w-50 sm:w-100 lg:w-200 h-25 sm:h-50 lg:h-100 text-xl sm:text-2xl lg:text-4xl"
      onClick={handleClick}>
    {text}
    </div>
  );
}

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
