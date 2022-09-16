import WatchHeader from '../../components/WatchHeader/WatchHeader';
import './WatchPage.scss';
import watchImage from '../../assets/images/watch-page.png';
import {Link} from 'react-router-dom';

const WatchPage = () => {
    return (
        <main className="watch-live">
            <WatchHeader />
            <Link to="/watch/bNIDLnoiLeI"><img src={watchImage} alt="watch page"></img></Link>
        </main>
    )
}

export default WatchPage;