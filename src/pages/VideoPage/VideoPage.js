import VideoData from "../../data/youtube-data.json";
import VideoCard from "../../components/videoCard/VideoCard";

import "./VideoPage.scss";
import Search from "../../components/Search/Search";

const VideoPage = () => {
	return (
		<section className="videos__section">
			<Search />
			<h2 className="videos__title">As We Rise: 26 Years of the WNBA</h2>

			<div className="videos__container">
				{VideoData.map((video, i) => (
					<VideoCard key={i} videoData={video} />
				))}
			</div>
		</section>
	);
};

export default VideoPage;
