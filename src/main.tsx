import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {AppProvider} from './store/AppProvider';
import CustomTheme from './styles/CustomTheme';
import {SWRConfig} from 'swr';
import API from './api/config';
import {Backdrop, CircularProgress} from '@mui/material';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <CustomTheme>
        <SWRConfig
          value={{fetcher: (url: string) => API(url).then(res => res.data), suspense: true}}
        >
          <App />
        </SWRConfig>
      </CustomTheme>
    </AppProvider>
  </React.StrictMode>
);
