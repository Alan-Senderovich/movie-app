import { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { CircleRated } from '@/components';
import { EMPTY_IMAGE_URL, IMAGE_URL_BASE } from '@/constants';
import { IMovieCard } from '@/interfaces';
import { formatDate, textTruncate } from '@/utils';

const MovieCard: FC<IMovieCard> = ({ id, title, image, date, vote_average, overview }) => {
    const formattedDate = formatDate(date);
    const maxLengthOverview = 65;
    const maxLengthTitle = 45;

    const truncatedOverview = textTruncate(overview, maxLengthOverview);
    const truncatedTitle = textTruncate(title, maxLengthTitle);

    return (
        <div className='flex md:flex-col w-full md:w-[90%] max-w-[350px] min-w-[150px] mx-auto rounded-md border border-gray-200 shadow-lg md:pb-2'>
            <div className="w-[94px] md:w-auto min-w-[94px] h-[141px] min-h-[150px] md:min-h-[200px] flex">
                <Link href={`/movie/${id}`} className='w-full h-full relative'>
                    <Image
                        src={
                            image
                                ? `${IMAGE_URL_BASE}${image}`
                                : `${EMPTY_IMAGE_URL}`
                        }
                        alt={title}
                        width={200}
                        height={100}
                        sizes='200px'
                        className='w-full rounded-t-md h-full md:h-auto'
                    />
                </Link>
            </div>
            <div className='relative'>
                <div className='pt-5 md:pt-12 px-4 md:px-2 flex flex-col pb-4 md:pb-0'>
                    <Link href={`/movie/${id}`} className='text-md md:text-sm font-bold text-black hover:text-lightBlue cursor-pointer'>{truncatedTitle}</Link>
                    <span className='text-md md:text-sm text-gray-400'>{formattedDate}</span>
                    <p className='md:hidden text-sm pt-3'>{truncatedOverview}</p>
                </div>
                <div className='hidden md:block absolute top-0 left-2'>
                    <CircleRated percentage={vote_average * 10} size={20} fontSize={13} />
                </div>
            </div>
        </div>
    )
}

export default MovieCard
