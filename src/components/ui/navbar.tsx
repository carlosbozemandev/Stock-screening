import React from "react";
import { Button } from "./button";
import { LogInIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-black via-gray-800 to-black border-b text-white text-sm h-16 md:h-12">
      {/* Logo / Title */}
      <div className="font-bold flex justify-center items-center text-xl p-2">
        Stock Screening
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-3 justify-center items-center">
        <Link
          href={"/landing/home"}
          className="hover:bg-blue-500 cursor-pointer px-3 py-1 rounded-md"
        >
          Home
        </Link>
        <li className="hover:bg-blue-500 cursor-pointer px-3 py-1 rounded-md">
          About
        </li>
        <li className="hover:bg-blue-500 cursor-pointer px-3 py-1 rounded-md">
          Services
        </li>
        <li className="hover:bg-blue-500 cursor-pointer px-3 py-1 rounded-md">
          Contact
        </li>
        <li className="hover:bg-blue-500 cursor-pointer px-3 py-1 rounded-md">
          Pricing
        </li>
        <li className="hover:bg-blue-500 cursor-pointer px-3 py-1 rounded-md">
          Terms of Service
        </li>
      </ul>

      {/* Login Button */}
      <div className="flex justify-center items-center p-2">
        <Link
          href="/auth/signin"
          className="text-white bg-gradient-to-r from-black via-gray-800 to-black flex items-center px-3 py-1 rounded-md border hover:bg-blue-600"
        >
          Login <LogInIcon className="h-4 w-4 ml-2 text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
