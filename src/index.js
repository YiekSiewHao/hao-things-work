import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Or your main css file
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // <-- IMPORT THIS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* <-- WRAP YOUR APP */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);