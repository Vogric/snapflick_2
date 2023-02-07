import styles from './Home.module.css';
import BackgroundVideo from '../../comps/ui/BackgroundVideo/BackgroundVideo';
import Header from '../../comps/ui/Header/Header';
import Footer from '../../comps/ui/Footer/Footer';
import { useState } from 'react';
import Carousel from '../../comps/Home/Carousel/Carousel';

const Home: () => JSX.Element = () => {
  const [improveHomeUi, setImproveHomeUi] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <BackgroundVideo />
      <Header onClick={(): void => setImproveHomeUi(!improveHomeUi)} />
      <Carousel improveHomeUi={improveHomeUi} />
      <Footer />
    </div>
  );
};

export default Home;
