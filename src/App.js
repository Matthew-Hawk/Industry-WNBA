import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomePage from "./pages/Welcome/Welcome";
import HomePage from "./pages/HomePage/HomePage";
import Nav from "./components/Nav/Nav";
import Artical from "./pages/Artical/Artical";
import VideoPage from "./pages/VideoPage/VideoPage";
import WatchLive from "./pages/WatchLive/WatchLive";
import StatsPage from "./pages/Stats/Stats";
import TeamsPage from "./pages/TeamsPage/TeamsPage";
import PlayersPage from "./pages/PlayersPage/PlayerPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/welcome" element={<WelcomePage />} />
					<Route path="/teams" element={<TeamsPage />} />
					<Route path="/players" element={<PlayersPage />} />
					<Route path="/homepage" element={<HomePage />} />
					<Route path="/videos" element={<VideoPage />} />
					<Route path="/watch-live" element={<WatchLive />} />
					<Route path="/artical/:id" element={<Artical />} />
					<Route path="/stats" element={<StatsPage />} />
				</Routes>

				<Nav />
			</BrowserRouter>
		</>
	);
}
export default App;
