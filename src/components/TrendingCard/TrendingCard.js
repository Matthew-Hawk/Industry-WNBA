import "./TrendingCard.scss";

const TrendingCard = ({ data }) => {
	return (
		<section className="trending__section">
			<div className="trending__container">
				<img className="trending__img" src={data.image} alt={data.title} />
				<h3 className="trending__title">{data.title}</h3>
				<p className="trending__title">{data.description}</p>
				<span className="">Read More</span>
			</div>
		</section>
	);
};

export default TrendingCard;
