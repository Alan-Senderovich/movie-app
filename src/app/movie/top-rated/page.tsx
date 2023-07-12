"use client";

import { useEffect, useState } from 'react';
import { Aside, MovieList} from '@/components';
import { getMovies } from '@/api';
import { IMovieDetail } from '@/interfaces';

const TopRatedPage = () => {
  const [topratedMovies, setTopratedMovies] = useState<IMovieDetail[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadedOnce, setLoadedOnce] = useState<boolean>(false);

  // Function to fetch top-rated movies
  const fetchMovies = async () => {
    try {
      const movies: { results: IMovieDetail[] } = await getMovies('top_rated', page);
      setTopratedMovies(movies.results);
    } catch (error) {
      console.error('Error fetching top_rated movies:', error);
    }
  };

  useEffect(() => {
    // Load top-rated movies on page load
    fetchMovies();
  }, []);

  useEffect(() => {
    // Function to handle user scroll event
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollThreshold = 0.9;
      if (scrollTop + clientHeight >= scrollHeight * scrollThreshold && loadedOnce) {
        loadMoreMovies();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);


  const loadMoreMovies = async () => {
    try {
      setLoadedOnce(true);
      setLoading(true);
      const movies: { results: IMovieDetail[] } = await getMovies('top_rated', page + 1);
      if (movies.results.length > 0) {
        setTopratedMovies((prevMovies) => [...prevMovies, ...movies.results]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error('Error fetching top_rated movies:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full pt-16 px-4 md:px-10 flex xl:px-72'>
            <div className='w-full relative flex gap-4 flex-col md:flex-row'>
                <div className='md:w-[39%] flex flex-col gap-3'>
                    <Aside tab="sort" />
                    <Aside tab="whereToWatch" />
                    <Aside tab="filters" />
                    <button className='bg-lightBlue text-white flex justify-center w-full py-2 my-2 rounded-full font-bold hover:bg-darkBlue'>
                        Search
                    </button>
                </div>
                <MovieList movies={topratedMovies} loading={loading} onLoadMore={loadMoreMovies}/>
            </div>
        </div>
  );
};

export default TopRatedPage;
