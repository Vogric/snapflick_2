import styles from './SelectedMovieOrTvShow.module.css';
import { MovieOrTVShow } from '../../../model';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ROUTE } from '../../../../services/enums';

interface SelectedMovieOrTvShowProps {
  moviesAndTvShows: MovieOrTVShow[];
  index: number;
  showMovieOrTVShowDetail: () => void;
}

const SelectedMovieOrTvShow = ({
  moviesAndTvShows,
  index,
  showMovieOrTVShowDetail,
}: SelectedMovieOrTvShowProps): JSX.Element => {
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
