import './WatchHeader.scss';
import logo from '../../assets/images/logo-white.svg';

const WatchHeader = () => {
    return (
        <header className="watch-header">
            <h1 className="watch-header__title">Watch</h1>
            <img className="logo" src={logo} alt="WNBA"/>
        </header>
    )
}

export default WatchHeader;