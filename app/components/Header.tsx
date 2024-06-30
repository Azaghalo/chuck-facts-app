import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 bg-opacity-90 backdrop-blur-sm z-50 after:content-[''] after:block after:w-full after:h-px after:bg-gray-500 after:absolute after:bottom-0">
      <div className="navbar px-8 lg:px-2 max-w-5xl m-auto text-white">
        <div className="flex-1">
          <Link href="/" className="text-xl font-bold">
            Chuck Norris Facts
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-0">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
