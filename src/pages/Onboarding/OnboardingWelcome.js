import './OnboardingWelcome.scss';
import { Link } from 'react-router-dom';
import welcomeImage from '../../assets/images/onboarding-welcome.svg';

const OnboardingWelcome = () => {
    return (
        <main className="onboarding-welcome">
            <Link to="/onboarding/select-team" className="onboarding-welcome__image" src={welcomeImage} alt="onboarding welcome"/>
        </main>
    )
}

export default OnboardingWelcome;