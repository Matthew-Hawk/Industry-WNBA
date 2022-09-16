import './PlayPage.scss';
import playStart from '../../assets/images/play-start-screen.png';
import playMain from '../../assets/images/play-main-screen.png';
import { useState } from 'react';

const PlayPage = () => {
    const [ showStart, setShowStart ] = useState(true);

    const closeStart = () => {
        setShowStart(false);
    }

    return (
        <main className="play">
            <input type="image" src={showStart ? playStart : playMain} alt="watch page" onClick={closeStart} />
        </main>
    )
}

export default PlayPage;