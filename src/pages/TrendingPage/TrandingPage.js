import { Link } from "react-router-dom";

import TrendingData from "../../data/trending.json";
import TrendingCard from "../../components/TrendingCard/TrendingCard";

import "./TrendingPage.scss";
import Search from "../../components/Search/Search";
import trending from "../../assets/images/trending.png";

const TrendingPage = () => {
	return (
		<section className="trending-page__section">
			<Search />
			<h2 className="trending__title">Trending Now</h2>
			{
				<div className="trending-page__container">
					{TrendingData.map((data, i) => (
						<TrendingCard key={i} data={data} />
					))}
				</div>
			}
			{/*<img className="image" src={trending}></img>*/}
		</section>
	);
};

export default TrendingPage;
