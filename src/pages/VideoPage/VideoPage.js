import VideoData from "../../data/youtube-data.json";
import VideoCard from "../../components/videoCard/VideoCard";

import "./VideoPage.scss";
import Search from "../../components/Search/Search";

const VideoPage = () => {
	return (
		<section>
			<Search />
			<h1>Trading Videos</h1>

			<div className="videos__container">
				{VideoData.map((video, i) => (
					<VideoCard key={i} videoData={video} />
				))}
			</div>
		</section>
	);
};

export default VideoPage;
