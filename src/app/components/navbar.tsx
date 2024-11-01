import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-cyan-600 p-4">
      <div className="container mx-auto">
        <ul className="flex font-bold gap-8 text-blue-100">
          <li>
            <Link href="/Home">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
          <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}