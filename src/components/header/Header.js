import "./Header.scss";

import Logo from "../../assets/icons/wnba-logo.jpg";

const Header = () => {
	return (
		<header className="header__section">
			<div className="header__logo-container">
				<img className="header__logo" src={Logo} alt="" />
			</div>
			<div className="header__content">
				<div className="header__search-container">
					<input className="header__search" type="text" placeholder="Search" />
				</div>
				<h3 className="header__login">Login</h3>
			</div>
		</header>
	);
};

export default Header;
