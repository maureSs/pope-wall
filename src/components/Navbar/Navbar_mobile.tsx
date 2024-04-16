'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import pope from '../../../public/pope.png'

const NavbarMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeNavbar = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="text-lg md:text-2xl font-bold" style={{ backgroundColor: '#0d0f14', opacity: '0.93' }}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex flex-row">
                    <Image src={pope} alt='dantesito' width={70} height={70} />
                    <h1 className="pt-4 md:pt-0">Pope Wall</h1>
                </div>
                <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="p-7">
                        <li className="mb-4" onClick={closeNavbar}><Link href="/" className="block py-4">Home</Link></li>
                        <li className="mb-4" onClick={closeNavbar}><Link href="/generator" className="block py-4">Password Generator</Link></li>
                        <li className="mb-4" onClick={closeNavbar}><Link href="/account" className="block py-4">Secure Your Accounts</Link></li>
                        <li className="mb-4" onClick={closeNavbar}><Link href="/frontend" className="block py-4">Front End Security</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarMobile