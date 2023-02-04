import { useNavigate } from 'react-router-dom';
import styles from './MovieOrTvShowDetail.module.css';

const MovieOrTvShowDetail = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={(): void => navigate('/')}>Home</button>
      <div>MovieOrTvShowDetail comp</div>
    </>
  );
};

export default MovieOrTvShowDetail;
