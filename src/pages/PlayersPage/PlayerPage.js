import "./PlayersPage.scss";

import Logo from "../../assets/images/logo-white.svg";

const PlayersPage = () => {
	return (
		<section className="players__section">
			<div className="players__logo-container">
				<img className="players__logo" src={Logo} alt="" />
			</div>

			<h1 className="players__title">Select Favotite Players</h1>

			<h3 className="players__time">Connecticut Sun</h3>
			<div className="players__logo-container">
				<div className="players__img"></div>
				<div className="players__img"></div>
				<div className="players__img"></div>
				<div className="players__img"></div>
				<div className="players__img"></div>
				<div className="players__img"></div>
				<div className="players__img"></div>
				<div className="players__img"></div>
				<div className="players__img"></div>
			</div>

			<button className="players__btn">CONTINUE</button>
		</section>
	);
};

export default PlayersPage;
