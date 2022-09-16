import "./Articles.scss";

const Articles = ({ articleData }) => {
	console.log(articleData);
	return (
		<section className="news">
			<div className="news__img-container">
				<img className="news__img" src={articleData.image} alt="" />
			</div>
			<div className="news__container">
				<h3 className="news__title">{articleData.title}</h3>
				<h4 className="news__author">Author</h4>
				<p className="news__context">{articleData.content}</p>
			</div>
		</section>
	);
};

export default Articles;
