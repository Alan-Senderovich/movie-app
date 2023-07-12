import { useState } from 'react';
import { movieDetailTabs } from '@/constants';
import { AiFillCaretDown } from 'react-icons/ai';

const MovieDetailTabs = () => {
    const [activeSection, setActiveSection] = useState<number | null>(null);

    const handleSectionHover = (sectionId: number) => {
        setActiveSection(sectionId);
    };

    const handleSectionLeave = () => {
        setActiveSection(null);
    };

    return (
        <ul className='flex gap-6 z-500 text-black justify-center'>
            {movieDetailTabs.map((section) => (
                <div
                    className={`flex items-center gap-2 ${section.id === 1 ? 'relative' : ''
                        }`}
                    key={section.id}
                    onMouseEnter={() => handleSectionHover(section.id)}
                    onMouseLeave={handleSectionLeave}
                >
                    <li className='text-sm cursor-pointer py-3'>
                        {section.label}
                        {activeSection === section.id && (
                            <ul className='absolute top-9 bg-white text-black font-normal py-1 z-50 w-[150px] rounded-md border border-gray-200'>
                                {section.options.map((option) => (
                                    <li
                                        key={option.id}
                                        className='cursor-pointer hover:bg-gray-100 py-1 px-4'
                                    >
                                        {option.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    {section.id === 1 && <span className='absolute bottom-0 w-full h-[4px] bg-lightBlue'></span>}
                    <AiFillCaretDown size={10} />
                </div>
            ))}
        </ul>
    );
};

export default MovieDetailTabs;
