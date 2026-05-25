type Category = "Food" | "Kitchen";

  type Props = {
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
};

export default function Navbar({ setCategory }: Props) {
  return <nav className="navbar m-8">
    <div className="flex flex-col gap-8">
      <h1 className="text-pink-900 text-left text-xl sm:text-2xl md:text-4xl">Flashcards for Danish</h1>
      <ul className="flex flex-col gap-2">
        <li onClick={() => setCategory("Food")} className="text-pink-900 text-left border button">Food</li>
        <li onClick={() => setCategory("Kitchen")} className="text-pink-900 text-left border button">Kitchen</li>
      </ul>
    </div>
  </nav>
}