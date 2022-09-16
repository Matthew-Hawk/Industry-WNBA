import TeamsData from "../../data/teams.json";
import { Link, useNavigate } from "react-router-dom"
import "./TeamsPage.scss";

import Logo from "../../assets/images/logo-white.svg";
import backIcon from "../../assets/icons/arrow-back.svg";

const TeamsPage = () => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	}

	return (
		<section className="teams__section">
			<input className="back" type="image" src={backIcon} onClick={goBack} />

			<div className="teams__logo-container">
				<img className="teams__logo" src={Logo} alt="" />
			</div>

			<h1 className="teams__title">Select Favorite Teams</h1>

			<div className="teams__logo-container">
				{TeamsData.map((data) => (
					<div className="teams__logo-box">
						<img className="teams__logo-tag" src={data.logo} alt="" />
						<h4 className="teams__name">{data.team}</h4>
					</div>
				))}
			</div>

			<Link to="/onboarding/select-players"><button  className="button teams__btn">CONTINUE</button></Link>
		</section>
	);
};

export default TeamsPage;
