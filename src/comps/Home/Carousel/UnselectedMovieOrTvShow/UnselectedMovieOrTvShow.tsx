import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ROUTE } from '../../../../services/enums';
import { MovieOrTVShow } from '../../../model';
import styles from './UnselectedMovieOrTvShow.module.css';

interface UnselectedMovieOrTvShowProps {
  alt: string;
  moviesAndTvShows: MovieOrTVShow[];
  position: number;
}

const UnselectedMovieOrTvShow: FC<UnselectedMovieOrTvShowProps> = ({
  alt,
  moviesAndTvShows,
  position,
}): JSX.Element => {
  return (
    <div>
      <LazyLoadImage
        src={`${ROUTE.TMDB_IMAGE}${moviesAndTvShows?.[position]?.poster_path}`}
        alt={alt}
        className={styles.unselect}
        effect="blur"
      />
    </div>
  );
};

export default UnselectedMovieOrTvShow;
