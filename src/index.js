import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './vendor/normalize.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('.page')
);
reportWebVitals();
