"use client";

import { useState } from 'react';
import Link from 'next/link';
import { navBarSections } from '@/constants';

interface MenuMobileProps {
    onClose: () => void;
  }

const MenuMobile: React.FC<MenuMobileProps> = ({ onClose }) => {
    const [activeSection, setActiveSection] = useState<number | null>(null)

    const handleSectionClick = (sectionId: number) => {
        if (sectionId === activeSection) {
            setActiveSection(null);
        } else {
            setActiveSection(sectionId);
        }
    };

    return <ul className='flex flex-col bg-[#1a3852] gap-2 absolute top-[70px] left-0 w-[200px] p-4'>
        {navBarSections.map((section) => (
            <div key={section.id} onClick={() => handleSectionClick(section.id)}>
                <li className='text-lg font-bold cursor-pointer relative'>
                    {section.label}
                    {activeSection === section.id && (
                        <ul className=' text-white text-sm font-normal py-1 z-50 w-[150px]'>
                            {section.options.map((option) => (
                                <li key={option.id} className='cursor-pointer hover:bg-gray-100 py-1'>
                                    <Link href={option.href}>
                                        <span onClick={onClose}>{option.label}</span>

                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            </div>
        ))}
    </ul>
}

export default MenuMobile