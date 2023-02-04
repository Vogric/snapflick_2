import styles from './SelectedMovieOrTvShow.module.css';
import { MovieOrTVShow } from '../model';

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
      <img
        src={`https://image.tmdb.org/t/p/w500/${moviesAndTvShows?.[index]?.poster_path}`}
        alt="poster-movie"
        className={styles.poster}
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
