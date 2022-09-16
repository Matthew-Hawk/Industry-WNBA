import "./Search.scss";

import WnbaLogo from "../../assets/icons/wnba-logo.jpg";
import { Link } from "react-router-dom";

const Search = () => {
	return (
		<section className="search__section">
			<div className="search__logo-container">
				<Link to="/"><img className="search__logo" src={WnbaLogo} alt="" /></Link>
			</div>
			<div className="search__container">
				<input className="search__input" type="text" placeholder="Search" />
			</div>
		</section>
	);
};

export default Search;
