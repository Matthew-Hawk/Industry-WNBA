import "./TrendingCard.scss";

const TrendingCard = ({ data }) => {
	console.log(data);
	return (
		<section className="trending__section">
			<div className="trending__container">
				<iframe
					className="trending__player"
					src={`${data.video}`}
					title={data.title}
					frameBorder="0"
					allowFullScreen
					allow="autoplay; encrypted-media"
				/>
				<h3 className="trending__title">{data.title}</h3>
			</div>
		</section>
	);
};

export default TrendingCard;
