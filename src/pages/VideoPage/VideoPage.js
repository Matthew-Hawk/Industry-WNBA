import VideoData from "../../data/youtube-data.json";
import VideoCard from "../../components/videoCard/VideoCard";
import "./VideoPage.scss";
import Header from "../../components/header/Header";

const VideoPage = () => {
	return (
		<section>
			<Header />
			<h1>Trading Videos</h1>
			<div>
				{VideoData.map((video, i) => (
					<VideoCard key={i} videoData={video} />
				))}
			</div>
		</section>
	);
};

export default VideoPage;
