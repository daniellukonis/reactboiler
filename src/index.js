//import react
import React from 'react';
import ReactDOM from 'react-dom/client';

//import CSS
import './index.css';

//import app component
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);