import './CourtAnalytics.scss';
import analyticsImage from '../../assets/images/court-analytics.png';

const CourtAnalytics = () => {
    return (
        <div className="analytics">
            <h2 className="analytics__title">COURT ANALYTICS</h2>
            <div className="analytics__image-container">
                <img className="anaytics__image" src={analyticsImage} alt="court analytics"/>
            </div>
        </div>
    )
}

export default CourtAnalytics;