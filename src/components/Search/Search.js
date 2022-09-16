import "./Search.scss";

import WnbaLogo from "../../assets/icons/wnba-logo.jpg";

const Search = () => {
	return (
		<section className="search__section">
			<div className="search__logo-container">
				<img className="search__logo" src={WnbaLogo} alt="" />
			</div>
			<div className="search__container">
				<input className="search__input" type="text" placeholder="Search" />
			</div>
		</section>
	);
};

export default Search;
