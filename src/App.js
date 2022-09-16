import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import Header from  "./components/Header/Header"


function App() {
  
	return (
		<div className="body">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
        <Header />
			</BrowserRouter>
		</div>
	);
}

export default App
