import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Context from './main/Context/context';
import { Toaster } from 'react-hot-toast'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL || ''}>
      <Context>
        <App />
        <Toaster position="top-left" toastOptions={{
          className: 'toast',
          duration: 1500,

        }} />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);

