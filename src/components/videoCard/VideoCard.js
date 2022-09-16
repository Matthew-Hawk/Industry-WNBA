import "./VideoCard.scss";

const VideoCard = ({ videoData }) => {
	return (
		<section className="video__section">
			<div className="video__container">
				<iframe
					className="video__player"
					src={`${videoData.video}`}
					title={videoData.title}
					frameBorder="0"
					allowFullScreen
				/>
				<h3 className="video__title">{videoData.title}</h3>
			</div>
		</section>
	);
};

export default VideoCard;
