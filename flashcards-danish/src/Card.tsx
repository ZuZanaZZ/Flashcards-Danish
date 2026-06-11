import React from "react"

export default function Card(props: { frontSide: string; backSide: string; }) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  React.useEffect(() => {
    setIsFlipped(false);
  }, [props.frontSide]);

  function handleClick() {
    setIsFlipped(flipped => !flipped);
  }

  return (
    <div
    className={`text-red-900 flashcard border w-full max-w-3xl aspect-2/1 text-2xl md:text-4xl ${isFlipped ? "flipped" : ""}`}
    onClick={handleClick}>
      <div className="front">{props.frontSide}</div>
      <div className="back">{props.backSide}</div>
    </div>
  );
}