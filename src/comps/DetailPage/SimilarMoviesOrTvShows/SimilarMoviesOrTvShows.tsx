import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getSimilarMovies,
  getSimilarTVShows,
} from '../../../services/MoviesAndTvShows.service';
import { MovieOrTVShow } from '../../../comps/model';
import styles from './SimilarmMoviesOrTvShows.module.css';
import { useDispatch } from 'react-redux';
import { firstTenMoviesOrTVShowsWithPoster } from '../../utils';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ROUTE } from '../../../services/enums';
import { updateSelectedMovieOrTvShow } from '../../../store';

interface SimilarmMoviesOrTvShowsProps {
  id: number;
}

const SimilarMoviesOrTvShows: FC<SimilarmMoviesOrTvShowsProps> = ({
  id,
}): JSX.Element => {
  const [similarMoviesOrTvShows, setSimilarMoviesOrTvShows] = useState<
    MovieOrTVShow[]
  >([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnClickSimilarMovieTvShow = (
    similarMovieOrTvShow: MovieOrTVShow
  ): void => {
    const action = updateSelectedMovieOrTvShow(similarMovieOrTvShow);
    dispatch(action);
    return navigate(`${ROUTE.DETAIL}${similarMovieOrTvShow.id}`);
  };

  useEffect((): void => {
    getSimilarMovies(id)
      .then((similarMovies) => {
        setSimilarMoviesOrTvShows(similarMovies);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  useEffect((): void => {
    getSimilarTVShows(id)
      .then((similarTVShows) => {
        setSimilarMoviesOrTvShows(similarTVShows);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <section className={styles.container}>
      {firstTenMoviesOrTVShowsWithPoster(similarMoviesOrTvShows).map(
        (similarMovieAndTvShow) => {
          const { title, name, poster_path, id } = similarMovieAndTvShow;
          return (
            <div
              key={id}
              className={styles.similarContainer}
              onClick={(): void =>
                handleOnClickSimilarMovieTvShow(similarMovieAndTvShow)
              }
            >
              <LazyLoadImage
                src={`${ROUTE.TMDB_IMAGE}${poster_path}`}
                alt="similar-movie-or-tvshow-poster"
                className={styles.similarPoster}
                effect="blur"
              />
              <p className={styles.titleOrName}>{title || name}</p>
            </div>
          );
        }
      )}
    </section>
  );
};

export default SimilarMoviesOrTvShows;
