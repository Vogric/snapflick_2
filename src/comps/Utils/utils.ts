import { MovieOrTVShow } from '../model';

export const firstTenMoviesOrTVShowsWithPoster = (
  similarMoviesOrTvShows: MovieOrTVShow[]
): MovieOrTVShow[] => {
  return MovieOrTVShowWithPoster(similarMoviesOrTvShows).slice(0, 10);
};

export const MovieOrTVShowWithPoster = (
  MoviesOrTVShows: MovieOrTVShow[]
): MovieOrTVShow[] =>
  MoviesOrTVShows.filter((MovieOrTVShow) => MovieOrTVShow.poster_path);
