import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import Header from  "./components/Header/Header"
import Artical from "./pages/Artical/Artical";


function App() {
  
	return (
		<div className="body">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/artical/:id" element={<Artical />} />
				</Routes>

        <Header />
      </BrowserRouter>
    </>
  );
}

export default App;
