import { Link } from "react-router-dom";

import VideoData from "../../data/youtube-data.json";
import TrendingCard from "../../components/TrendingCard/TrendingCard";

import "./TrendingPage.scss";
import Search from "../../components/Search/Search";

const TrendingPage = () => {
	return (
		<section className="trending-page__section">
			<Search />
			<div className="homepage__link-container">
				<Link className="homepage__link" to="/">
					<h1 className="homepage__title">YOUR FEED </h1>
				</Link>{" "}
				<span className="homepage__div">|</span>
				<Link className="homepage__link" to="/trending">
					<h1 className="homepage__title">WNBA TRENDING</h1>
				</Link>
			</div>

			<div className="trending=page__container">
				{VideoData.map((data, i) => (
					<TrendingCard key={i} data={data} />
				))}
			</div>
		</section>
	);
};

export default TrendingPage;
