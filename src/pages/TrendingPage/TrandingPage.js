import { Link } from "react-router-dom";

import VideoData from "../../data/youtube-data.json";
import TrendingCard from "../../components/TrendingCard/TrendingCard";

import "./TrendingPage.scss";
import Search from "../../components/Search/Search";
import trending from "../../assets/images/trending.png";

const TrendingPage = () => {
	return (
		<section className="trending-page__section">
			<Search />
			{/* <div className="trending=page__container">
				{VideoData.map((data, i) => (
					<TrendingCard key={i} data={data} />
				))}
			</div> */}
			<img className="image" src={trending}></img>
		</section>
	);
};

export default TrendingPage;
