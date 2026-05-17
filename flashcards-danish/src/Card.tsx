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
    <div className="flashcard border w-50 sm:w-100 lg:w-200 h-25 sm:h-50 lg:h-100 text-xl sm:text-2xl lg:text-4xl"
      onClick={handleClick}>
    {text}
    </div>
  );
}