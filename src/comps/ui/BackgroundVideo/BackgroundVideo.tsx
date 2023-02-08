import { FC } from 'react';
import styles from './BackgroundVideo.module.css';

const BackgroundVideo: FC = (): JSX.Element => {
  return (
    <video
      data-testid="background-video"
      className={styles.backgroundVideo}
      autoPlay
      loop
      muted
    >
      <source src={'/backgroundVideo.mp4'} type="video/mp4" />
    </video>
  );
};
export default BackgroundVideo;
