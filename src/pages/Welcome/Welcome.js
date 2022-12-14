import "./Welcome.scss";
import Logo from "../../assets/images/logo-white.svg";
import welcomeImage from "../../assets/images/welcome-image.png";
import { Link } from "react-router-dom";

const WelcomePage = () => {
	return (
		<section className="welcome__section">
			<div className="welcome__logo-container">
				<img className="welcome__logo" src={Logo} alt="" />
			</div>

			<div className="welcome__hero">
				<img alt="" />
			</div>
			<div className="welcome__container">
				<img className="welcome__image" src={welcomeImage} alt="welcome"></img>
				<h3 className="welcome__title">WELCOME</h3>
				<span className="welcome__text">
					Time to connect with your favorite player.
				</span>
				<span className="welcome__log">
					HAVE AN ACCOUNT? <span className="welcome__login">LOG IN</span>
				</span>
			</div>

			<Link to="/onboarding/select-teams"><button className="button welcome__btn">GET STARTED</button></Link>
		</section>
	);
};

export default WelcomePage;
