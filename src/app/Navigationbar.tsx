"use client"

import { useState } from 'react';
import React, { FC } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

interface NavigationbarProps {

}

const HOME_LABEL = 'home'

const NavigationBar: FC<NavigationbarProps> = (props) => {
    const [isMobileMenu, setIsMobileMenu] = useState(false)
    const Links = [
        {
            href: '/home',
            label: 'Home'
        },
        {
            href: '/about',
            label: 'About'
        },
        {
            href: '/blog',
            label: 'Blog'
        },
        {
            href: '/projects',
            label: 'Projects'
        },
    ]

    return (
        <nav className="shadow-lg dark:shadow-gray-700/20">
            <div className="mx-auto px-4">

                {/* LOGO & BUTTON CONTAINER */}
                <div className="flex justify-between items-center py-4">

                    <Link href="/" className="text-black dark:text-white text-lg font-semibold">
                        Website Name
                    </Link>

                    <div className="flex md:hidden gap-4 items-center">
                        {/* DARK MODE BUTTON */}
                        <span>
                            {/* <BsFillMoonStarsFill className="cursor-pointer text-black dark:text-white" /> */}
                            <ThemeSwitcher />
                        </span>
                        {/* MOBILE NAVBAR BUTTON */}
                        <button
                            type="button"
                            className="text-white"
                            onClick={() => setIsMobileMenu(!isMobileMenu)}>
                            <FaBars className="text-black dark:text-white text-xl" />
                        </button>
                    </div>
                    
                    {/* DESKTOP VIEW NAV BAR */}
                    <div className="hidden md:flex gap-6 text-black dark:text-white items-center">
                        {/* <Link href="/about" className="hover:text-gray-600">About</Link>
                        <Link href="/blog" className="hover:text-gray-600">Blog</Link>
                        <Link href="/projects" className= "hover:text-gray-600">Projects</Link> */}
                        {/* DARK MODE BUTTON */}
                        <ThemeSwitcher />
                    </div>

                </div>

                {/* MOBILE VIEW NAV BAR */}
                {isMobileMenu && (
                    <div className="md:hidden">
                        <div className="flex flex-col gap-2 pb-6 text-black dark:text-white">
                            <Link href="/about" className="hover:text-gray-600">About</Link>
                            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
                            <Link href="/projects" className="hover:text-gray-600">Projects</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavigationBar;