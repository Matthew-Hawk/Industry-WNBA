import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import WelcomePage from "./pages/Welcome/Welcome";
import HomePage from "./pages/HomePage/HomePage";
import Nav from "./components/Nav/Nav";
import Artical from "./pages/Artical/Artical";
import VideoPage from "./pages/VideoPage/VideoPage";
import WatchLive from "./pages/WatchLive/WatchLive";
import WatchPage from "./pages/WatchPage/WatchPage";
import StatsPage from "./pages/Stats/Stats";
import TeamsPage from "./pages/TeamsPage/TeamsPage";
import PlayersPage from "./pages/PlayersPage/PlayerPage";
import TrendingPage from "./pages/TrendingPage/TrandingPage";
import PlayPage from "./pages/PlayPage/PlayPage";
import Shopping from "./pages/ShoppingPage/Shopping";
import StatsPage2 from "./pages/Stats/extend-page/StatsPage2";
import StatsPage3 from "./pages/Stats/extend-page/StatsPage3";
import WatchShare from "./pages/WatchLive/WatchShare"


function App() {
	const [showOnboarding, setShowOnboarding] = useState(true);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							showOnboarding ? <Navigate to="/onboarding" /> : <HomePage />
						}
					/>
					<Route path="/onboarding" element={<WelcomePage />} />
					<Route path="/onboarding/select-teams" element={<TeamsPage />} />
					<Route
						path="/onboarding/select-players"
						element={<PlayersPage setShowOnboarding={setShowOnboarding} />}
					/>
					<Route path="/videos" element={<VideoPage />} />
					<Route path="/trending" element={<TrendingPage />} />
					<Route path="/watch" element={<WatchPage />} />
					<Route path="/watch/:videoId" element={<WatchLive />} />
					<Route path="/watch/:videoId/share" element={<WatchShare />} />
					<Route path="/artical" element={<Artical />} />
					<Route path="/stats" element={<StatsPage />} />
					<Route path="/stats/page2" element={<StatsPage2 />} />
					<Route path="/stats/page3" element={<StatsPage3 />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="/store" element={<Shopping />} />

				</Routes>

				{showOnboarding ? null : <Nav />}
			</BrowserRouter>
		</>
	);
}
export default App;
