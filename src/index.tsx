import React from 'react';
import ReactDOM from 'react-dom/client';
import Snapflick from './Snapflick';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Snapflick />
  </React.StrictMode>
);

reportWebVitals();
