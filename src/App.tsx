import {Suspense} from 'react';
import Loading from './components/atoms/Loading';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    </>
  );
}

export default App;
