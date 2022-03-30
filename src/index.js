import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import RoutesRoot from './routes';

ReactDOM.render(
  <React.StrictMode>
    <RoutesRoot />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
