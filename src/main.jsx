import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/globalStyle/GlobalStyles.scss';
import AppRoutes from './AppRoutes.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
