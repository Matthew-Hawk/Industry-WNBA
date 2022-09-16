import './WatchLive.scss'
import WatchHeader from '../../components/WatchHeader/WatchHeader';
import videoData from '../../data/youtube-data.json';
import Comments from '../../components/Comments/Comments';

const WatchLive = () => {
    return (
        <main className="watch-live">
            <WatchHeader />
            <video src={videoData[0].video}></video>
            <Comments />
        </main>
    )
}

export default WatchLive;