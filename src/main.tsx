import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CustomTheme from './styles/CustomTheme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CustomTheme>
      <App />
    </CustomTheme>
  </React.StrictMode>
);
