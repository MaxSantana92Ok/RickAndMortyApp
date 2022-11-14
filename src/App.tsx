import {Suspense} from 'react';
import Home from './components/pages/Home';
import Public from './components/pages/Public';

function App() {
  return (
    <>
      <Suspense fallback={<>Loading</>}>
        <Home />
      </Suspense>
    </>
  );
}

export default App;
