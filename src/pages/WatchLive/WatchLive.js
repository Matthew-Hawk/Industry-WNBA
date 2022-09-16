import './WatchLive.scss'
import WatchHeader from '../../components/WatchHeader/WatchHeader';
import videoData from '../../data/youtube-data.json';
import Comments from '../../components/Comments/Comments';
import thumbnail from '../../assets/images/video-thumbnail.png';

const WatchLive = () => {
    return (
        <main className="watch-live">
            <WatchHeader />
            <video className="watch-live__video" src={videoData[0].video} poster={thumbnail} controls></video>
            <Comments />
        </main>
    )
}

export default WatchLive;