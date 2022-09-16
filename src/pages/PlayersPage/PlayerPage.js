import "./PlayersPage.scss";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo-white.svg";
import monique from "../../assets/images/players/monique.svg";
import maya from "../../assets/images/players/maya.svg";
import kaila from "../../assets/images/players/kaila.svg";
import nia from "../../assets/images/players/nia.svg";
import asia from "../../assets/images/players/asia.svg";
import tiffany from "../../assets/images/players/tiffany.svg";
import naz from "../../assets/images/players/naz.svg";
import rhyne from "../../assets/images/players/rhyne.svg";

const PlayersPage = ({ setShowOnboarding }) => {
	const finishOnboarding = () => {
		setShowOnboarding(false);
	}

	return (
		<section className="players__section">
			<div className="players__logo-container">
				<img className="players__logo" src={Logo} alt="" />
			</div>

			<h1 className="players__title">Select Favorite Players</h1>
			<input className="players__search" type="text" placeholder="Search for team or player" />

			<h3 className="players__time">Atlanta Dream</h3>
			<div className="players__logo-container">
				<div className="players__container">
					<img className="players__img" src={monique} alt="monique"/>
					<h4 className="players__name">Monique Billings</h4>
				</div>
				<div className="players__container">
					<img className="players__img" src={maya} alt="maya"/>
					<h4 className="players__name">Maya Caldwell</h4>
				</div>
				<div className="players__container">
					<img className="players__img" src={kaila} alt="kaila"/>
					<h4 className="players__name">Kaila Charles</h4>
				</div>
				<div className="players__container">
					<img className="players__img" src={nia} alt="nia"/>
					<h4 className="players__name">Nia Coffey</h4>
				</div>
				<div className="players__container">
				<img className="players__img" src={asia} alt="asia"/>
					<h4 className="players__name">{"Asia (AD) Durr"}</h4>
				</div>
				<div className="players__container">
				<img className="players__img" src={tiffany} alt="tiffany"/>
					<h4 className="players__name">Tiffany Hayes</h4>
				</div>
				<div className="players__container">
				<img className="players__img" src={naz} alt="naz"/>
					<h4 className="players__name">Naz Hillmon</h4>
				</div>
				<div className="players__container">
				<img className="players__img" src={rhyne} alt="rhyne"/>
					<h4 className="players__name">Rhyne Howard</h4>
				</div>
			</div>

			<Link to="/"><button className="button players__btn" onClick={finishOnboarding}>CONTINUE</button></Link>
		</section>
	);
};

export default PlayersPage;
