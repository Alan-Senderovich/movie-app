"use client";

import { useState } from 'react'
import Link from 'next/link';
import { navBarSections } from '@/constants'

const NavbarItems = ({ }) => {
    const [activeSection, setActiveSection] = useState<number | null>(null)

    const handleSectionHover = (sectionId: number) => {
        setActiveSection(sectionId);
    }

    const handleSectionLeave = () => {
        setActiveSection(null);
    }

    return (
        <ul className='flex gap-6 z-500'>
            {navBarSections.map((section) => (
                <div key={section.id} onMouseEnter={() => handleSectionHover(section.id)}
                    onMouseLeave={handleSectionLeave}>
                    <li
                        className='text-sm font-bold cursor-pointer relative py-4'
                    >
                        {section.label}
                        {activeSection === section.id && (
                            <ul className='absolute top-12 bg-white text-black font-normal py-1 z-50 w-[150px] rounded-md border border-gray-200'>
                                {section.options.map((option) => (
                                    <li key={option.id} className='cursor-pointer hover:bg-gray-100 py-1 px-4'>
                                        <Link href={option.href}>
                                            {option.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                </div>
            ))}
        </ul>
    )
}

export default NavbarItems;
