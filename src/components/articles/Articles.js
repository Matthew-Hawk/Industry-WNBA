import "./Articles.scss";

const Articles = ({ articleData }) => {
	return (
		<section className="article">
			<div className="article__img-container">
				<img className="article__img" />
			</div>
			<div className="article__container">
				<h3 className="article__title">{articleData.title}</h3>
				<h4 className="article__author">Author</h4>
				<p className="article__context">{articleData.content}</p>
			</div>
		</section>
	);
};

export default Articles;
