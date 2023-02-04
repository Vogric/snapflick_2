import { lazy, Suspense, useEffect, useState } from 'react';
import styles from '../HomeCarousel/HomeCarousel.module.css';
import { MovieOrTVShow } from './model';
import { getPopularMoviesAndTvShows } from './HomeCarousel.service';
import { useNavigate } from 'react-router-dom';
import Spinner from '../ui/Spinner/Spinner';
import Button from '../ui/Button/Button';

const UnselectedMovieOrTvShow = lazy(
  () => import('./UnselectedMovieOrTvShow/UnselectedMovieOrTvShow')
);
const SelectedMovieOrTvShow = lazy(
  () => import('./SelectedMovieOrTvShow/SelectedMovieOrTvShow')
);

const HomeCarousel: () => JSX.Element | null = () => {
  const [moviesAndTvShows, setMoviesAndTvShows] = useState<MovieOrTVShow[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const navigate = useNavigate();

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

  const showMovieOrTVShowDetail = (
    moviesOrTvShow: MovieOrTVShow[],
    currentIndex: number
  ) => {
    navigate(`/details/:${moviesOrTvShow?.[currentIndex]?.id}`);
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

      <UnselectedMovieOrTvShow
        moviesAndTvShows={moviesAndTvShows}
        position={currentIndex - 1}
        alt={currentIndex ? 'poster-movie' : ''}
      />

      <Suspense fallback={<Spinner />}>
        <SelectedMovieOrTvShow
          moviesAndTvShows={moviesAndTvShows}
          index={currentIndex}
          showMovieOrTVShowDetail={(): void =>
            showMovieOrTVShowDetail(moviesAndTvShows, currentIndex)
          }
        />
      </Suspense>

      {currentIndex ? (
        <UnselectedMovieOrTvShow
          moviesAndTvShows={moviesAndTvShows}
          position={currentIndex + 1}
          alt={currentIndex ? '' : 'poster-movie'}
        />
      ) : null}

      <Button contentValue={'>'} handleClick={handleNext} />
    </div>
  ) : null;
};

export default HomeCarousel;
