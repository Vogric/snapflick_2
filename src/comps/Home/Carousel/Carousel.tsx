import { FC, lazy, Suspense, useEffect, useState } from 'react';
import styles from '../Carousel/Carousel.module.css';
import { MovieOrTVShow } from '../../model';
import { getPopularMoviesAndTvShows } from '../../../services/MoviesAndTvShows.service';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../ui/Spinner/Spinner';
import Button from '../../ui/Button/Button';
import { useDispatch } from 'react-redux';
import { updateSelectedMovieOrTvShow } from '../../../store/index';
import UnselectedMovieOrTvShow from './UnselectedMovieOrTvShow/UnselectedMovieOrTvShow';
import { MovieOrTVShowWithPoster } from '../../utils';

const SelectedMovieOrTvShow = lazy(
  () => import('./SelectedMovieOrTvShow/SelectedMovieOrTvShow')
);

interface CarouselProps {
  improveHomeUi: boolean;
}

enum ArrowDirection {
  RIGHT = 1,
  LEFT = -1,
}

const Carousel: FC<CarouselProps> = ({ improveHomeUi }): JSX.Element | null => {
  const [moviesAndTvShows, setMoviesAndTvShows] = useState<MovieOrTVShow[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showMovieOrTVShowDetail = (
    moviesOrTvShow: MovieOrTVShow[],
    currentIndex: number
  ): void => {
    const action = updateSelectedMovieOrTvShow(moviesOrTvShow?.[currentIndex]);
    dispatch(action);
    navigate(`/detail/:${moviesOrTvShow?.[currentIndex]?.id}`);
  };

  const handleCarouselArrows = (delta: number): void => {
    setCurrentIndex(
      (currentIndex + delta + moviesAndTvShows.length) % moviesAndTvShows.length
    );
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

  return MovieOrTVShowWithPoster(moviesAndTvShows).length ? (
    <div className={styles.container}>
      <Button
        value={'<'}
        handleClick={(): void => handleCarouselArrows(ArrowDirection.LEFT)}
      />

      {improveHomeUi ? (
        <UnselectedMovieOrTvShow
          moviesAndTvShows={moviesAndTvShows}
          position={currentIndex - 1}
          alt={currentIndex ? 'poster-movie' : ''}
        />
      ) : null}
      <Suspense fallback={<Spinner />}>
        <SelectedMovieOrTvShow
          moviesAndTvShows={moviesAndTvShows}
          index={currentIndex}
          showMovieOrTVShowDetail={(): void =>
            showMovieOrTVShowDetail(moviesAndTvShows, currentIndex)
          }
        />
      </Suspense>

      {improveHomeUi && currentIndex ? (
        <UnselectedMovieOrTvShow
          moviesAndTvShows={moviesAndTvShows}
          position={currentIndex + 1}
          alt={currentIndex ? '' : 'poster-movie'}
        />
      ) : null}

      <Button
        value={'>'}
        handleClick={(): void => handleCarouselArrows(ArrowDirection.RIGHT)}
      />
    </div>
  ) : null;
};

export default Carousel;
