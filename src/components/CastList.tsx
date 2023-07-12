import Image from 'next/image';
import { FC } from 'react';
import { EMPTY_IMAGE_URL, IMAGE_URL_BASE } from '@/constants';

export interface CastListProps {
    cast: {
        character: string;
        name: string;
        profile_path: string;
    }[];
}

const CastList: FC<CastListProps> = ({ cast }) => {
    return (
        <div className="overflow-x-auto px-10 pt-10 ">
            <h2 className="text-black text-lg font-bold pb-4">Top Billed Cast</h2>
            <div className="flex space-x-4 ">
                {cast.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-black border border-gray-300 rounded-md shadow-lg h-[300px] min-h-[150px] max-h-[300px] pb-4">
                        <div className='w-[135px]'>
                            <Image
                                src={
                                    item.profile_path
                                        ? `${IMAGE_URL_BASE}${item.profile_path}`
                                        : `${EMPTY_IMAGE_URL}`
                                }
                                alt={item.name}
                                width={300}
                                height={300}
                                sizes='200px'
                                className='w-full rounded-t-md'
                            />
                        </div>
                        <div className='flex flex-col items-start w-full p-2 gap-1'>
                            <h3 className="font-bold text-sm leading-4">{item.name}</h3>
                            <p className='text-xs'>{item.character}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CastList;
