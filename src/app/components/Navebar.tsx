import Link from "next/link";
import React from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-primary p-4 text-accent">
      <div className="text-2xl md:text-3xl ml-1 md:ml-[56.76px]">
        <Link href="/" className="flex items-center space-x-1">
          <span
            className="inline-block bg-cover bg-center w-[40px] h-[40px]"
            style={{
              backgroundImage: "url('/logos.png')",
            }}
          ></span>
          <span
            className="inline-block bg-cover bg-center w-[100px] h-[40px] "
            style={{
              backgroundImage: "url('/urity.png')",
            }}
          ></span>
        </Link>
      </div>
      {/* Search Box Section */}
      <div className="relative flex items-center flex-grow max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-4">
        <input
          type="text"
          placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
          className="w-full px-3 py-1 pl-10 rounded-md text-icontextcolor focus:outline-none font-nunito"
        />
        <FaSearch className="absolute left-3 text-icontextcolor" />
      </div>

      {/* Icons Section */}
      <div className="flex space-x-4 text-lg mr-4">
        <button className="hover:text-accent">
          <FaHeart />
        </button>
        <button className="hover:text-accent">
          <FaUser />
        </button>
        <button className="hover:text-accent">
          <FaShoppingCart />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
