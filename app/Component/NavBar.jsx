"use client";
import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";
import NavLinks from "./NavLinks";
import MenuOverlay from "./MenuOverlay";
import {Transition} from "@headlessui/react";

const navLinks = [
    {
        href: "#about",
        title: "À propos"
    },
    {
        href: "#projects",
        title: "Mes projets"
    },
    {
        href: "#contact",
        title: "Contact"
    }
];
const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#111111] bg-opacity-95 w-screen md:h-24 h-auto">
            <div className="flex flex-wrap items-center justify-between xl:px-28 lg:px-20 md:px-12 px-4 py-4">
                <Link href={"/"}>
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={75}
                        height={75}
                        className="md:w-[65px] md:h-[65px] w-[50px] h-[50px]"
                    />
                </Link>
                <div className="mobile-menu block md:hidden">
                    {
                        navbarOpen ? (
                            <button onClick={() => setNavbarOpen(false)}
                                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="none" stroke="white" className="h-5 w-5"
                                           d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(true)}
                                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="none" stroke="white" className="h-5 w-5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                </svg>
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto text-lg" id="navbar">
                    <ul className="flex md:flex-row p-4 md:p-0 md:space-x-8 mt-0">
                        {navLinks.map((navLink, index) => (
                            <NavLinks
                                key={index}
                                href={navLink.href}
                                title={navLink.title}
                            />
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <Transition
                    enter="transition ease duration-500 transform"
                    enterFrom="opacity-0 -translate-y-12"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease duration-300 transform"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-12"
                    show={navbarOpen}
                >
                    {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
                </Transition>
            </div>
        </nav>
    );
};
export default NavBar;
