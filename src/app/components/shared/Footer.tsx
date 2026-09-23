import logo from "@/assets/logo.png";
import li from "@/assets/li.png";
import fb from "@/assets/fb.png";
import x from "@/assets/x.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-950 via-blue-950 to-gray-950 text-white mt-20">
            <div className="container mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Left - Logo */}
                    <Link href={'/'}>
                        <div className="flex gap-2 items-center">
                            <Image src={logo} width={28} height={35} alt="logo" />
                            <p className="text-blue-700 font-semibold">
                                HERO.IO
                            </p>
                        </div>

                    </Link>

                    {/* Middle - Links */}
                    <div className="flex gap-6 text-sm text-gray-400">
                        <div className="flex gap-6 text-sm text-gray-400">
                            <Link href="/" className="hover:text-white transition">Home</Link>
                            <Link href="/apps" className="hover:text-white transition">Apps</Link>
                            <Link href="/installations" className="hover:text-white transition">Installation</Link>
                        </div>
                    </div>

                    {/* Right - Social */}
                    <div className="flex items-center gap-4">
                        <p className="text-sm text-gray-400">Follow us:</p>
                        <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition">
                            <Image src={li} width={20} height={20} alt="linkedin" />
                        </a>
                        <a href="#" className="bg-gray-800 hover:bg-blue-500 p-2 rounded-lg transition">
                            <Image src={fb} width={20} height={20} alt="facebook" />
                        </a>
                        <a href="#" className="bg-gray-800 hover:bg-sky-500 p-2 rounded-lg transition">
                            <Image src={x} width={20} height={20} alt="x" />
                        </a>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
                    Copyright © 2025 HERO.IO — All rights reserved
                </div>

            </div>
        </footer>
    );
};

export default Footer;