import { ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieOrTvShowDetail from './comps/Home/HomeCarousel/MovieOrTvShowDetail/MovieOrTvShowDetail';
import Home from './comps/Home/Home';

const SnapflickApp = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={(<Home />) as unknown as ReactNode} />
        <Route
          path="/details/:id"
          element={(<MovieOrTvShowDetail />) as unknown as ReactNode}
        />
        <Route path="*" element={(<Home />) as unknown as ReactNode} />
      </Routes>
    </Router>
  );
};

export default SnapflickApp;
