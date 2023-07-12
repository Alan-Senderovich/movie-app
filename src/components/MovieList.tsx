import { FC } from 'react';
import { IMovieDetail } from '@/interfaces';
import {MovieCard} from '@/components';

interface MovieListProps {
  movies: IMovieDetail[];
  loading: boolean;
  onLoadMore: () => void;
}

const MovieList: FC<MovieListProps> = ({ movies, loading, onLoadMore }) => {
  return (
    <div>
      <h1 className='absolute -top-10 left-0 text-black text-2xl font-bold'>Popular Movies</h1>
      <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} image={movie.poster_path} vote_average={movie.vote_average} date={movie.release_date} genres={movie.genres} overview={movie.overview} />
        ))}
      </ul>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <button
          onClick={onLoadMore}
          className='bg-lightBlue text-white font-bold py-2 px-4 mt-4 rounded-md w-[96%] my-4 mx-auto flex justify-center'
          disabled={!movies.length || loading}
        >
          Cargar más
        </button>
      )}
    </div>
  );
};

export default MovieList;
