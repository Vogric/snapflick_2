import axios from 'axios';
import { MovieOrTVShow } from '../comps/model';
import { ROUTE } from './enums';

export const getPopularMoviesAndTvShows = async (): Promise<{
  movies: Array<MovieOrTVShow>;
  tvShows: Array<MovieOrTVShow>;
}> => {
  const [moviesResponse, tvShowsResponse] = await Promise.all([
    axios.get(
      `${ROUTE.BASE_URL}${ROUTE.MOVIE}${ROUTE.POPULAR}${ROUTE.API_KEY}${process.env.REACT_APP_API_KEY}`
    ),
    axios.get(
      `${ROUTE.BASE_URL}${ROUTE.TVSHOW}${ROUTE.POPULAR}${ROUTE.API_KEY}${process.env.REACT_APP_API_KEY}`
    ),
  ]);

  const movies = moviesResponse.data.results as Array<MovieOrTVShow>;
  const tvShows = tvShowsResponse.data.results as Array<MovieOrTVShow>;

  return { movies, tvShows };
};

export const getSimilarMovies = async (
  id: number
): Promise<Array<MovieOrTVShow>> => {
  const response = await axios.get(
    `${ROUTE.BASE_URL}${ROUTE.MOVIE}${id}${ROUTE.SIMILAR}${ROUTE.API_KEY}${process.env.REACT_APP_API_KEY}`
  );

  return response.data.results as Array<MovieOrTVShow>;
};

export const getSimilarTVShows = async (
  id: number
): Promise<Array<MovieOrTVShow>> => {
  const response = await axios.get(
    `${ROUTE.BASE_URL}${ROUTE.TVSHOW}${id}${ROUTE.SIMILAR}${ROUTE.API_KEY}${process.env.REACT_APP_API_KEY}`
  );

  return response.data.results as Array<MovieOrTVShow>;
};
