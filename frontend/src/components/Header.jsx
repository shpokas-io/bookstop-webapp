export default function Header() {
  return (
    <header className="bg-blue-600 text-white p- 4">
      <h1 className="text-xl">BookStore</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
            <a href="/reservations">Reservations</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
