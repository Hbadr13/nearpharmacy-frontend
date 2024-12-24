"use client";
import { useState } from "react";
import { Menu, X, Home, Users, Clipboard, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
    { href: "#home", label: "Accueil", icon: <Home className="w-5 h-5 mr-2" /> },
    { href: "#services", label: "Services", icon: <Clipboard className="w-5 h-5 mr-2" /> },
    { href: "#contact", label: "Contact", icon: <Phone className="w-5 h-5 mr-2" /> },
    { href: "#about", label: "À propos", icon: <Users className="w-5 h-5 mr-2" /> },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    return (
        <nav className="bg-blue-500 text-white shadow-md p-4 fixed  z-40 top-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <Image
                    className="rounded-sm w-10 h-10"
                    src="/PharmaFinder-small.png"
                    width={1000}
                    height={1000}
                    alt="logo"
                />
                <button
                    className="md:hidden active:bg-blue-400 duration-200 rounded-md p-1"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                <div
                    className={`${isMenuOpen ? "block" : "hidden"
                        } mt-16 md:mt-0 md:flex absolute md:relative bg-blue-500 w-full md:w-auto top-0 left-0 md:flex-row md:space-x-6 p-4 md:p-0`}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="  md:inline-  truncate p-2   text-lg hover:bg-blue-700 rounded flex items-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.icon}
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
