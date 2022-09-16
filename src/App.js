import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VideoShare from './pages/VideoShare';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video-share" element={<VideoShare />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
