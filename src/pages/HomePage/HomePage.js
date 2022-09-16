import { Link } from "react-router-dom";
import Articles from "../../components/articles/Articles";
import Header from "../../components/header/Header";
import data from "../../data/data.json";
import "./HomePage";

const HomePage = () => {
	return (
		<section>
			<Header />
			<h1>Your Personalized Feed!</h1>
			<div>
				{data.map((articleData) => (
					<Articles articleData={articleData} />
				))}
			</div>
		</section>
	);
};

export default HomePage;
