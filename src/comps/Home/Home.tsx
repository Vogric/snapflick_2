import styles from './Home.module.css';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import BackgroundVideo from './ui/BackgroundVideo/BackgroundVideo';
import Footer from './ui/Footer/Footer';
import Header from './ui/Header/Header';

const Home: () => JSX.Element = () => {
  return (
    <div className={styles.container}>
      <BackgroundVideo />
      <Header />
      <HomeCarousel />
      <Footer />
    </div>
  );
};

export default Home;
