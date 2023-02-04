import { MovieOrTVShow } from '../model';
import styles from './UnselectedMovieOrTvShow.module.css';

interface UnselectedMovieOrTvShowProps {
  moviesAndTvShows: MovieOrTVShow[];
  position: number;
  alt: string;
}

const UnselectedMovieOrTvShow = ({
  moviesAndTvShows,
  position,
  alt,
}: UnselectedMovieOrTvShowProps): JSX.Element => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${moviesAndTvShows?.[position]?.poster_path}`}
        alt={alt}
        className={styles.unselect}
      />
    </div>
  );
};

export default UnselectedMovieOrTvShow;
