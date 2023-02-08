import styles from './SelectedMovieOrTvShow.module.css';
import { MovieOrTVShow } from '../../../model';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ROUTE } from '../../../../services/enums';
import { FC } from 'react';

interface SelectedMovieOrTvShowProps {
  index: number;
  moviesAndTvShows: MovieOrTVShow[];
  showMovieOrTVShowDetail: () => void;
}

const SelectedMovieOrTvShow: FC<SelectedMovieOrTvShowProps> = ({
  index,
  moviesAndTvShows,
  showMovieOrTVShowDetail,
}): JSX.Element => {
  return (
    <div className={styles.selected} onClick={showMovieOrTVShowDetail}>
      <LazyLoadImage
        src={`${ROUTE.TMDB_IMAGE}${moviesAndTvShows?.[index]?.poster_path}`}
        alt="poster-movie"
        className={styles.poster}
        effect="blur"
      />
      <span className={styles.voteAverage}>
        {moviesAndTvShows?.[index]?.vote_average + '⭐'}
      </span>
      <h1 className={styles.title}>
        {moviesAndTvShows?.[index]?.title || moviesAndTvShows?.[index]?.name}
      </h1>
    </div>
  );
};

export default SelectedMovieOrTvShow;
