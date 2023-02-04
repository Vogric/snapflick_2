import styles from './BackgroundVideo.module.css';

const video =
  'https://vod-progressive.akamaized.net/exp=1675479301~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F673%2F22%2F553367621%2F2617802231.mp4~hmac=77635d06ab0ad687dc4f5000a1906829b74181a12af7f321af5991f3b7944f6a/vimeo-prod-skyfire-std-us/01/673/22/553367621/2617802231.mp4';

const BackgroundVideo = (): JSX.Element => {
  return (
    <video className={styles.backgroundVideo} autoPlay loop muted>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
