type Category = "Hv-words" | "Rooms" | "Living Room" | "Bedroom" | "Bathroom" | "Kitchen" | "Balcony" | "Transportation" | "Colleagues" ;

  type Props = {
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
};

export default function Navbar({ setCategory }: Props) {
  return (
    <nav className="mx-8 mt-8 navbar md:w-64">
      <ul className="flex md:flex-col gap-4">
        <li onClick={() => setCategory("Hv-words")} className="text-pink-900 border button py-2 grow">Hv-words</li>
        <li onClick={() => setCategory("Rooms")} className="text-pink-900 border button py-2 grow">Rooms</li>
        <li onClick={() => setCategory("Living Room")} className="text-pink-900 border button py-2 grow">Living Room</li>
        <li onClick={() => setCategory("Bedroom")} className="text-pink-900 border button py-2 grow">Bedroom</li>
        <li onClick={() => setCategory("Bathroom")} className="text-pink-900 border button py-2 grow">Bathroom</li>
        <li onClick={() => setCategory("Kitchen")} className="text-pink-900 border button py-2 grow">Kitchen</li>
        <li onClick={() => setCategory("Balcony")} className="text-pink-900 border button py-2 grow">Balcony</li>
        <li onClick={() => setCategory("Transportation")} className="text-pink-900 border button py-2 grow">Transportation</li>
        <li onClick={() => setCategory("Colleagues")} className="text-pink-900 border button py-2 grow">Colleagues</li>
      </ul>
    </nav>
  )
}