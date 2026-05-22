export default function Navbar() {
    return <nav className="navbar m-8">
        <div className="flex flex-col gap-8">
            <h1 className="text-pink-900 text-left text-xl sm:text-2xl lg:text-4xl">Flashcards for Danish</h1>
            <ul className="flex flex-col gap-2">
                <li className="text-pink-900 text-left">Food</li>
                <li className="text-pink-900 text-left">Kitchen</li>
            </ul>
        </div>
    </nav>
}