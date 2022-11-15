import {Backdrop, CircularProgress} from '@mui/material';
import {Suspense} from 'react';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <Backdrop sx={{color: '#fff', zIndex: theme => theme.zIndex.drawer + 1}} open={true}>
              <CircularProgress color="inherit" />
            </Backdrop>
          </div>
        }
      >
        <Home />
      </Suspense>
    </>
  );
}

export default App;
