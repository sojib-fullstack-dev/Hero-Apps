"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import btnLogo from "@/assets/Vector.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="container mx-auto mt-5">
      <nav className="flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <div className="flex gap-1 items-center">
            <Image
              src={logo}
              width={30}
              height={50}
              alt="logo"
            />
            <p className="text-blue-700 font-semibold">
              HERO.IO
            </p>
          </div>
        </Link>

        {/* Menu */}
        <ul className="flex gap-3 items-center">

          <li>
            <Link
              className={
                pathname === "/"
                  ? "text-blue-600 border-b-1 font-semibold"
                  : ""
              }
              href="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className={
                pathname === "/apps"
                  ? "text-blue-600 border-b-1  font-semibold"
                  : ""
              }
              href="/apps"
            >
              Apps
            </Link>
          </li>

          <li>
            <Link
              className={
                pathname === "/installations"
                  ? "text-blue-600 border-b-1  font-semibold"
                  : ""
              }
              href="/installations"
            >
              Installation
            </Link>
          </li>

        </ul>

        {/* Contribute Button */}
        <button
          className="
            flex items-center gap-2
            px-4 py-2
            bg-gradient-to-r from-blue-500 to-indigo-600
            hover:from-blue-600 hover:to-indigo-700
            text-white font-medium
            rounded-lg shadow-md
            transition-all duration-300
            hover:scale-105
          "
        >
          <Image
            src={btnLogo}
            width={22}
            height={22}
            alt="Contribute"
          />

          <span>Contribute</span>
        </button>

      </nav>
    </div>
  );
};

export default Navbar;