import TeamsData from "../../data/teams.json";

import "./TeamsPage.scss";

import Logo from "../../assets/images/logo-white.svg";

const TeamsPage = () => {
	return (
		<section className="teams__section">
			<div className="teams__logo-container">
				<img className="teams__logo" src={Logo} alt="" />
			</div>

			<h1 className="teams__title">Select Favotite Teams</h1>

			<div className="teams__logo-container">
				{TeamsData.map((data) => (
					<div className="teams__logo-box">
						<img className="teams__logo-tag" src={data.logo} alt="" />
						<h4 className="teams__name">{data.team}</h4>
					</div>
				))}
			</div>

			<button className="teams__btn">CONTINUE</button>
		</section>
	);
};

export default TeamsPage;
