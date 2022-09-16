import "./Search.scss";

import WnbaLogo from "../../assets/icons/wnba-logo.jpg";
import { Link } from "react-router-dom";
import sparkleO from "../../assets/icons/spark_O.svg";
import sparkleW from "../../assets/icons/spark_W.svg";
import profile from "../../assets/icons/Profile.svg";
import { useState } from "react";

const Search = () => {
	const [sparkleOn, setSparkleOn] = useState(true);

	const toggleSparkle = () => {
		sparkleOn ? setSparkleOn(false) :setSparkleOn(true);
	}
	return (
		<section className="search__section">
			<div className="search__logo-container">
				<Link to="/"><img className="search__logo" src={WnbaLogo} alt="" /></Link>
			</div>
			<div className="search__container">
				<Link className="icon" to={sparkleOn?"/trending":"/"}><input type="image" src={sparkleOn? sparkleO:sparkleW} onClick={toggleSparkle}/></Link>
				<input className="icon search__input" type="text" placeholder="Search" />
				<img src={profile} alt="profile"></img>
			</div>
		</section>
	);
};

export default Search;
