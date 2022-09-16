import { Link } from "react-router-dom";
import Articles from "../../components/articles/Articles";

import Search from "../../components/Search/Search";
import data from "../../data/data.json";
import "./HomePage.scss";

const HomePage = () => {
	return (
		<section className="homepage">
			<Search />
			<h1 className="homepage__title">YOUR FEED</h1>
			<div>
				{data.map((articleData) => (
					<Link to='/artical'>
					<Articles articleData={articleData} />
					</Link>
				))}
			</div>
		</section>
	);
};

export default HomePage;
