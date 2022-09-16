import OnboardingHeader from '../../components/OnboardingHeader/OnboardingHeader';
import './OnboardingTeam.scss';

const OnboardingTeam = ({ setShowOnboarding }) => {
    return (
        <main className="onboarding-team">
            <OnboardingHeader title="Select Favorite Teams" />
        </main>
    )
}

export default OnboardingTeam;