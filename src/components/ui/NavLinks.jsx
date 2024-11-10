export default function NavLinks() {
  return (
    <nav className="flex flex-col items-center p-4 space-y-4 text-white">
      <a href="/" className="hover:underline">
        Home
      </a>
      <a href="/reservations" className="hover:underline">
        Reservations
      </a>
    </nav>
  );
}
