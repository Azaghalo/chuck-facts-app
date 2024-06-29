import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 bg-opacity-70 bg-stone-900 backdrop-blur-sm after:content-[''] after:block after:w-full after:h-px after:bg-gray-500 after:absolute after:bottom-0">
      <div className="navbar max-w-6xl m-auto text-white">
        <div className="flex-1">
          <Link href="/" className="text-xl font-bold">
            Chuck Norris Facts
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/about">Sobre</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
