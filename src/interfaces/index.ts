export interface IMovieGenre {
  id: number;
  name: string;
}

export interface IMovieCard {
  id: number;
  title: string;
  image: string;
  vote_average: number;
  date: string;
  overview: string;
  genres: IMovieGenre[];
}

export interface IMovieDetail {
  id: number;
  title: string;
  backdrop_path?: string;
  genres: IMovieGenre[];
  original_title: string;
  release_date: string;
  runtime: number;
  tagline?: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}
