import React from "react"

export default function Card(props: { frontSide: string; backSide: string; }) {
  const [text, setText] = React.useState(props.frontSide);

  React.useEffect(() => { 
    setText(props.frontSide); }, [props.frontSide]);

  function handleClick() {
    setText(oldState => {
      return oldState === props.frontSide ? props.backSide : props.frontSide;
    });
  }

  return (
    <div className="flashcard border w-full max-w-3xl aspect-2/1 text-2xl md:text-4xl"
      onClick={handleClick}>
    {text}
    </div>
  );
}