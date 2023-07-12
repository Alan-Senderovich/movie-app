"use client";

import { useState } from 'react'
import Link from 'next/link'
import {Logo, MenuMobile, NavbarItems} from '@/components'
import { BiPlusMedical } from "react-icons/bi";
import { PiMagnifyingGlass } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ }) => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    const closeMenu = () => {
        setIsOpenMenu(false)
    }

    return <div className='bg-darkBlue px-4 md:px-10 flex relative py-6 md:py-1 items-center justify-between xl:px-72 text-white z-50'>
        <div className='flex gap-5'>
            <div className='block md:hidden' onClick={toggleMenu}>
                <FiMenu size={24} />
            </div>
            <Logo />
            <div className='hidden md:block'>
                <NavbarItems />
            </div>
        </div>
        <div className='hidden md:flex items-center gap-6'>
            <BiPlusMedical />
            <span className='border border-white p-1 text-[11px] rounded-sm hover:bg-white hover:text-darkBlue cursor-pointer'>EN</span>
            <Link href="/" className='text-sm font-bold'>
                Login
            </Link>
            <Link href="/" className='text-sm font-bold'>
                Join TMDB
            </Link>
            <PiMagnifyingGlass size={24} fill='#01b4e4' className='cursor-pointer' />
        </div>
        {isOpenMenu && (
            <div className='text-white md:hidden'>
                <MenuMobile onClose={closeMenu}/>
            </div>
        )}
    </div>
}

export default Navbar