import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage"
import Header from  "./components/header/Header"
import Artical from "./pages/Artical/Artical";
import VideoPage from "./pages/VideoPage/VideoPage";
import WatchLive from "./pages/WatchLive/WatchLive";
import OnboardingWelcome from "./pages/Onboarding/OnboardingWelcome";
import OnboardingTeam from "./pages/Onboarding/OnboardingTeam";

function App() {
  const [ showOnboarding, setShowOnboarding ] = useState(true);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={showOnboarding ? <Navigate to="/onboarding"/> : <HomePage />} />
          <Route path="/onboarding" element={<OnboardingWelcome setShowOnboarding={setShowOnboarding} />} />
          <Route path="/onboarding/select-team" element={<OnboardingTeam />} />
					<Route path="/videos" element={<VideoPage />} />
          <Route path="/watch-live" element={<WatchLive />} />
					<Route path="/artical/:id" element={<Artical />} />
				</Routes>

        {showOnboarding ? null : <Header />}
      </BrowserRouter>
    </>
  );
}
export default App;
