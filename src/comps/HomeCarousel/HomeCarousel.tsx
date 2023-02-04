import { lazy, Suspense, useEffect, useState } from 'react';
import styles from '../HomeCarousel/HomeCarousel.module.css';
import Button from '../ui/Button/Button';
import { MovieOrTVShow } from './model';
import { getPopularMoviesAndTvShows } from './HomeCarousel.service';
import Spinner from '../ui/Spinner/Spinner';

const UnselectedMovieOrTvShow = lazy(
  () => import('./UnselectedMovieOrTvShow/UnselectedMovieOrTvShow')
);
const SelectedMovieOrTvShow = lazy(
  () => import('./SelectedMovieOrTvShow/SelectedMovieOrTvShow')
);

const HomeCarousel: () => JSX.Element | null = () => {
  const [moviesAndTvShows, setMoviesAndTvShows] = useState<MovieOrTVShow[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrevious = (): void => {
    setCurrentIndex(
      currentIndex === 0 ? moviesAndTvShows.length - 1 : currentIndex - 1
    );
  };

  const handleNext = (): void => {
    setCurrentIndex(
      currentIndex === moviesAndTvShows.length - 1 ? 0 : currentIndex + 1
    );
  };

  const showMovieOrTVShowDetail = () => {
    alert('Details page');
  };

  useEffect((): void => {
    getPopularMoviesAndTvShows()
      .then(({ movies, tvShows }) => {
        setMoviesAndTvShows([...movies, ...tvShows]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return moviesAndTvShows.length ? (
    <div className={styles.container}>
      <Button contentValue={'<'} handleClick={handlePrevious} />

      <Suspense fallback={<Spinner />}>
        <UnselectedMovieOrTvShow
          moviesAndTvShows={moviesAndTvShows}
          position={currentIndex - 1}
          alt={currentIndex ? 'poster-movie' : ''}
        />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <SelectedMovieOrTvShow
          moviesAndTvShows={moviesAndTvShows}
          index={currentIndex}
          showMovieOrTVShowDetail={showMovieOrTVShowDetail}
        />
      </Suspense>

      {currentIndex ? (
        <Suspense fallback={<Spinner />}>
          <UnselectedMovieOrTvShow
            moviesAndTvShows={moviesAndTvShows}
            position={currentIndex + 1}
            alt={currentIndex ? '' : 'poster-movie'}
          />
        </Suspense>
      ) : null}

      <Button contentValue={'>'} handleClick={handleNext} />
    </div>
  ) : null;
};

export default HomeCarousel;
