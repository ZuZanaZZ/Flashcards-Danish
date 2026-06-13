type Category = "Hv-words" | "Rooms" | "Living Room" | "Bedroom" | "Bathroom" | "Kitchen" | "Balcony" | "Transportation" | "Colleagues" ;

  type Props = {
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
};

export default function Navbar({ setCategory }: Props) {
  return (
    <nav className="mx-8 mt-8 navbar md:w-64">
      <ul className="grid grid-cols-3 md:grid-cols-1 gap-4">
        <li onClick={() => setCategory("Hv-words")} className="border button py-2 grow">Hv-words</li>
        <li onClick={() => setCategory("Rooms")} className="border button py-2 grow">Rooms</li>
        <li onClick={() => setCategory("Living Room")} className="border button py-2 grow">Living Room</li>
        <li onClick={() => setCategory("Bedroom")} className="border button py-2 grow">Bedroom</li>
        <li onClick={() => setCategory("Bathroom")} className="border button py-2 grow">Bathroom</li>
        <li onClick={() => setCategory("Kitchen")} className="border button py-2 grow">Kitchen</li>
        <li onClick={() => setCategory("Balcony")} className="border button py-2 grow">Balcony</li>
        <li onClick={() => setCategory("Transportation")} className="border button py-2 grow">Transport</li>
        <li onClick={() => setCategory("Colleagues")} className="border button py-2 grow">Colleagues</li>
      </ul>
    </nav>
  )
}