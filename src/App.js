import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import WatchLive from './pages/WatchLive/WatchLive';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watch-live" element={<WatchLive />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
