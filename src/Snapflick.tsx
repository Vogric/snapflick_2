import styles from './Snapflick.module.css';
import HomeCarousel from './comps/HomeCarousel/HomeCarousel';
import BackgroundVideo from './comps/ui/BackgroundVideo/BackgroundVideo';
import Header from './comps/ui/Header/Header';
import Footer from './comps/ui/Footer/Footer';

const Snapflick: () => JSX.Element = () => {
  return (
    <div className={styles.container}>
      <BackgroundVideo />
      <Header />
      <HomeCarousel />
      <Footer />
    </div>
  );
};

export default Snapflick;
