'use client'
import { useState, useEffect } from 'react'
import NavbarDesktop from './Navbar_desktop'
import NavbarMobile from './Navbar_mobile'

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            {windowWidth > 480 ? <NavbarDesktop /> : <NavbarMobile />}
        </>
    )
}

export default Navbar