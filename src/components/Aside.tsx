"use client";

import { FC, useState } from 'react'
import { genreFilters } from '@/constants';
import { BiSolidChevronDown, BiSolidChevronRight, BiSolidHelpCircle } from "react-icons/bi"
import { AiFillCaretDown } from "react-icons/ai"

interface AsideProps {
    tab: string;
}

const Aside: FC<AsideProps> = ({ tab }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const isSort = tab === "sort";
    const isWhereToWatch = tab === "whereToWatch";
    const isFilters = tab === "filters";

    const boxContainerStyled = "border-b border-gray-200 p-3 flex flex-col gap-1"
    const labelWrapperStyled = "flex items-center gap-2";
    const selectStyled = "w-full p-2 text-xs text-black bg-gray-300 border rounded-md shadow-sm outline-none appearance-none cursor-pointer gap-4 flex"

    const channelsAmount = 41;

    const toggleOpen = () => {
        setIsOpen(!isOpen);
      };

    return <div className={`border border-gray-200 shadow-md ${!isOpen ? "rounded-md" : "rounded-t-md"}`}>
        <div className='flex items-center justify-between p-3 cursor-pointer' onClick={toggleOpen}>
            <span className='font-semibold text-[16px]'>
                {isSort && "Sort"}
                {isWhereToWatch && "Where To Watch"}
                {isFilters && "Filters"}
            </span>
            {isWhereToWatch && (
                <span className='bg-gray-200 px-2 rounded-md text-sm text-gray-500 ml-4'>
                    {channelsAmount}
                </span>
            )}
            {isOpen ? <BiSolidChevronDown size={18} /> : <BiSolidChevronRight size={18} />}
        </div>

        {isOpen && isSort && (
            <div className='border-t border-gray-200 p-3'>
                <span className='text-sm text-gray-500'>Sort Results By</span>
                <div className="relative w-full lg:max-w-sm flex items-center mt-1">
                    <select className={selectStyled}>
                        <option className='bg-white cursor-pointer px-4'>Popular Descending</option>
                    </select>
                    <AiFillCaretDown size={12} className="absolute top-1/2 right-2 text-black pointer-events-none transform -translate-y-1/2" />
                </div>
            </div>
        )
        }

        {isOpen && isWhereToWatch && (
            <div className='border-t border-gray-200  text-gray-500'>
                <div className='border-b border-gray-200 p-3'>
                    <span className='text-sm '>My Services</span>
                    <div className='flex items-start gap-1'>
                        <input type="checkbox" className="mt-1" />
                        <span className='text-sm'>Restrict searches to my subscribed services?</span>
                    </div>
                </div>

                <div className='p-3'>
                    <span className='text-sm'>Country</span>
                    <div className="relative w-full lg:max-w-sm flex items-center mt-1">
                        <select className={selectStyled}>
                            <option className='bg-white cursor-pointer px-4'>Argentina</option>
                        </select>
                        <AiFillCaretDown size={12} className="absolute top-1/2 right-2 text-black pointer-events-none transform -translate-y-1/2" />
                    </div>
                </div>
            </div>
        )}

        {isOpen && isFilters && (
            <div className='border-t border-gray-200  text-gray-500'>
                <div className='border-b border-gray-200 p-3 flex flex-col'>
                    <div className={labelWrapperStyled}>
                        <span className='text-sm '>Show Me</span>
                        <BiSolidHelpCircle size={14} />
                    </div>
                    <div className='flex items-center gap-1'>
                        <input type="radio" checked={true} readOnly />
                        <span className='text-sm'>Everything</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <input type="radio" />
                        <span className='text-sm'>Movies I Haven&apos;t Seen</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <input type="radio" />
                        <span className='text-sm'>Everything</span>
                    </div>
                </div>

                <div className={boxContainerStyled}>
                    <div className={labelWrapperStyled}>
                        <span className='text-sm '>Availabilities</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <input type="checkbox" checked={true} readOnly/>
                        <span className='text-sm'>Search all availabilities?</span>
                    </div>
                </div>

                <div className={boxContainerStyled}>
                    <div className={labelWrapperStyled}>
                        <span className='text-sm '>Release Dates</span>
                    </div>
                    <div className='flex items-center gap-1 mb-1'>
                        <input type="checkbox" checked={true} readOnly/>
                        <span className='text-sm'>Search all releases?</span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='text-xs'>from</span>
                        <input type="date" className='text-transparent border border-gray-300 rounded-sm' />
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='text-xs'>to</span>
                        <input type="date" className='text-transparent border border-gray-300 rounded-sm' />
                    </div>
                </div>

                <div className={boxContainerStyled}>
                    <div className={labelWrapperStyled}>
                        <span className='text-sm '>Genres</span>
                    </div>
                    <div className='flex w-full flex-wrap gap-2'>
                        {genreFilters && genreFilters.map((genre, index) => (
                            <span key={index} className='border border-gray-400 rounded-full text-xs px-2 py-1 cursor-pointer hover:text-white hover:bg-lightBlue hover:border-lightBlue'>
                                {genre}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={boxContainerStyled}>
                    <div className={labelWrapperStyled}>
                        <span className='text-sm '>Certification</span>
                    </div>
                </div>

                <div className='border-b border-gray-200 p-3'>
                    <div className={labelWrapperStyled}>
                        <span className='text-sm '>Language</span>
                        <BiSolidHelpCircle size={14} />
                    </div>
                    <div className="relative w-full lg:max-w-sm flex items-center mt-1">
                        <select className={selectStyled}>
                            <option className='bg-white cursor-pointer px-4'>None Selected</option>
                        </select>
                        <AiFillCaretDown size={12} className="absolute top-1/2 right-2 text-black pointer-events-none transform -translate-y-1/2" />
                    </div>
                </div>

                <div className={boxContainerStyled}>
                    <div className={labelWrapperStyled}>
                        <span className='text-sm '>User Score</span>
                    </div>
                    <input type="range" />
                </div>

                <div className={boxContainerStyled}>
                    <div className={labelWrapperStyled}>
                        <span className='text-sm '>Minimum User Votes</span>
                    </div>
                    <input type="range" />
                </div>

                <div className={boxContainerStyled}>
                    <div className={labelWrapperStyled}>
                        <span className='text-sm '>Runtime</span>
                    </div>
                    <input type="range" />
                </div>

                <div className='p-3 flex flex-col gap-1'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-sm '>Kewwords</span>
                        <input type="text" placeholder='Filter by keywords...' className='text-xs border border-gray-300 p-2 rounded-md' />
                    </div>
                </div>

            </div>
        )}
        
    </div>
}

export default Aside