import styles from './DetailPage.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../comps/ui/Button/Button';
import { useSelector } from 'react-redux';
import { MovieOrTVShow } from '../../comps/model';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SimilarmMoviesOrTvShows from '../../comps/DetailPage/SimilarMoviesOrTvShows/SimilarMoviesOrTvShows';
import { ROUTE } from '../../services/enums';
import { FC } from 'react';

export interface State {
  selectedMovieOrTvShow: MovieOrTVShow[];
}

const DetailPage: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const getUpdateSelectedMovieOrTvShow = useSelector((state: State) => {
    return state.selectedMovieOrTvShow[0];
  });

  const {
    title,
    name,
    overview,
    vote_average,
    poster_path,
    backdrop_path,
    vote_count,
    id,
  } = getUpdateSelectedMovieOrTvShow;

  return (
    <section className={styles.container}>
      <img
        src={`${ROUTE.TMDB_IMAGE}${backdrop_path}`}
        alt="movie-or-tvshow-poster"
        className={styles.backgroundImage}
      />
      <Button
        isBackToHomeBtn={true}
        value={'Home'}
        handleClick={(): void => navigate('/')}
      />
      <div className={styles.informationContainer}>
        <LazyLoadImage
          src={`${ROUTE.TMDB_IMAGE}${poster_path}`}
          alt="movie-or-tvshow-poster"
          height={'500px'}
          effect="blur"
        />
        <div className={styles.information}>
          <h1 className={styles.titleOrName}>{title || name}</h1>
          <p className={styles.overview}>{overview}</p>
          <div className={styles.voteContainer}>
            <p className={styles.vote}>{`Vote count ${vote_count}`}</p>
            <p className={styles.vote}>{`Average vote ${vote_average}⭐`}</p>
          </div>
        </div>
      </div>
      <div>
        <SimilarmMoviesOrTvShows id={id} />
      </div>
    </section>
  );
};

export default DetailPage;
