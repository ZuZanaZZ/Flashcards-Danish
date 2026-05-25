type Category = "Food" | "Kitchen";

  type Props = {
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
};

export default function Navbar({ setCategory }: Props) {
  return (
    <nav className="mx-8 mt-8 navbar md:w-64">
      <ul className="flex md:flex-col gap-4">
        <li onClick={() => setCategory("Food")} className="text-pink-900 border button py-2 grow">Food</li>
        <li onClick={() => setCategory("Kitchen")} className="text-pink-900 border button py-2 grow">Kitchen</li>
      </ul>
    </nav>
  )
}