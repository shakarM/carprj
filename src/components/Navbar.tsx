import React from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <header className="w-full absolute z-10 ">
      <nav className="flex justify-between items-center sm:mx-12 px-6 py-4">
        <button
          type="submit"
          className="bg-blue-500 px-2 mt-2 p-1 rounded hover:bg-blue-600 text-white"
        >
          چوونەژوورەوە
        </button>
        <Link
          href="/"
          className="flex justify-center font-[s1]  items-center mt-2 p-1 rounded  "
        >
          شاکارمۆتۆڕ
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
