import './OnboardingHeader.scss';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/icons/arrow-back.svg';
import logo from '../../assets/images/logo-white.svg';

const OnboardingHeader = ({ title }) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <header className="onboarding-header">
            <input type="image" src={backIcon} alt="back" onClick={goBack} />
            <img src={logo} alt="WNBA" />
            <h1 className="onboarding-header__title">{title}</h1>
        </header>
    )
}

export default OnboardingHeader;