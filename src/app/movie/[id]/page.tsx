"use client"

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import {CircleRated, IconAction, CastList, MovieDetailTabs} from '@/components';
import { getMovieCasts, getMovieDetails } from '@/api';
import { formatMinutesToHours } from '@/utils';
import { IMovieCard, IMovieDetail, IMovieGenre } from '@/interfaces';
import { CastListProps } from '@/components/CastList';
import { iconActions, EMPTY_IMAGE_URL, IMAGE_URL_BASE } from '@/constants';
import { BsFillPlayFill } from "react-icons/bs";

interface IParamsMovieDetails {
  params: {
    id: IMovieCard["id"];
  }
}

const DetailMoviePage: FC<IParamsMovieDetails> = ({ params: { id } }: IParamsMovieDetails) => {
  const [movieDetail, setMovieDetail] = useState<Partial<IMovieDetail>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cast, setCast] = useState<{ character: string; name: string; profile_path: string; }[]>([]);

  // Fetch movie details and cast data
  const fetchMovieDetails = async () => {
    try {
      const movie = await getMovieDetails(id);
      const credits = await getMovieCasts(id);
      setMovieDetail(movie);
      setCast(credits.cast);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  }

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const { title, backdrop_path, poster_path, release_date, genres, tagline, overview, runtime, vote_average } = movieDetail;
  const date = release_date?.split("-")[0];
  const runtimeFormatted = runtime ? formatMinutesToHours(runtime) : '';

  const vote_averageFormatted = Math.floor((vote_average ?? 0) * 10);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <section className='w-full flex relative flex-col text-white pb-10'>
          <div>
            <MovieDetailTabs />
          </div>
          <div className='relative bg-no-repeat bg-initial bg-cover h-[90vh]' style={{ backgroundImage: `url(${IMAGE_URL_BASE}${backdrop_path})` }}>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70'></div>
            <div className='px-10 py-8 flex gap-10 xl:px-72 relative flex-wrap'>
              <div className='w-[23%]'>
                <Image
                  src={
                    poster_path
                      ? `${IMAGE_URL_BASE}${poster_path}`
                      : `${EMPTY_IMAGE_URL}`
                  }
                  alt={title ?? ""}
                  width={300}
                  height={300}
                  sizes='200px'
                  className='w-full rounded-md'
                />
              </div>
              <div className='flex-1 pt-10'>
                <div className='flex text-3xl font-bold'>
                  <h1>{movieDetail && title}</h1>
                  <span className='pl-2 text-gray-300'>{`(${date})`}</span>
                </div>

                <div className='text-[15px] mb-4'>
                  {movieDetail && genres?.map((m: IMovieGenre, index: number) => (
                    <span key={m.id} >{m.name}{index < (genres?.length ?? 0) - 1 && ", "}</span>
                  ))}
                  <span> • </span>
                  <span>{runtimeFormatted}</span>
                </div>

                <div className='flex items-center gap-2 mb-4 flex-wrap'>
                  <div className='hover:scale-110 duration-150 cursor-pointer'>
                    <CircleRated percentage={vote_averageFormatted} size={30} fontSize={16} />
                  </div>
                  <div className='text-sm font-bold'>
                    <p>User</p>
                    <p>score</p>
                  </div>
                  <div className='flex mx-3 gap-4'>
                    {iconActions && iconActions.map((icon, index: number) => (
                      <div key={index} className='cursor-pointer'>
                        <IconAction iconLabel={icon.iconLabel} />
                      </div>
                    ))}
                  </div>
                  <div className='flex items-center gap-1 cursor-pointer hover:text-gray-400 duration-150'>
                    <div>
                      <BsFillPlayFill size={20} />
                    </div>
                    <p className='text-sm font-bold'>Play Trailer</p>
                  </div>
                </div>

                <div>
                  <h6 className='italic text-gray-400 mb-2'>{tagline}</h6>
                  <div>
                    <h5 className='text-lg font-bold mb-1'>Overview</h5>
                    <p className='text-sm'>{overview}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className='xl:px-72'>
            <CastList cast={cast} />
          </div>
        </section >
      )}
    </>
  )
}

export default DetailMoviePage
