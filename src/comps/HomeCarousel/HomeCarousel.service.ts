import axios from 'axios';
import { MovieOrTVShow } from './model';

const BASE_URL = 'https://api.themoviedb.org/3';
const MOVIES_ROUTE = '/movie/popular';
const TV_SHOWS_ROUTE = '/tv/popular';

export const getPopularMoviesAndTvShows = async (): Promise<{
  movies: Array<MovieOrTVShow>;
  tvShows: Array<MovieOrTVShow>;
}> => {
  const [moviesResponse, tvShowsResponse] = await Promise.all([
    axios.get(
      `${BASE_URL}${MOVIES_ROUTE}?api_key=${process.env.REACT_APP_API_KEY}`
    ),
    axios.get(
      `${BASE_URL}${TV_SHOWS_ROUTE}?api_key=${process.env.REACT_APP_API_KEY}`
    ),
  ]);

  const movies = moviesResponse.data.results as Array<MovieOrTVShow>;
  const tvShows = tvShowsResponse.data.results as Array<MovieOrTVShow>;

  return { movies, tvShows };
};
