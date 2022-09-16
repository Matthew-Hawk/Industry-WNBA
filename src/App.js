import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import WatchLive from './pages/WatchLive/WatchLive';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watch-live" element={<WatchLive />} />
        </Routes>
        <Header />
      </BrowserRouter>
    </>
  );
}

export default App;
