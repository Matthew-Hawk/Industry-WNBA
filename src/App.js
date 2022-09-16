import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import Header from  "./components/Header/Header"
import Artical from "./pages/Artical/Artical";
import WatchLive from "./pages/WatchLive/WatchLive";

function App() {
  
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
          <Route path="/watch-live" element={<WatchLive />} />
					<Route path="/artical/:id" element={<Artical />} />
				</Routes>

        <Header />
      </BrowserRouter>
    </>
  );
}

export default App;
