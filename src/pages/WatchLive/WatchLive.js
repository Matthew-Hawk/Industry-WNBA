import './WatchLive.scss'
import WatchHeader from '../../components/WatchHeader/WatchHeader';
import videoData from '../../data/youtube-data.json';

const VideoShare = () => {
    return (
        <>
            <WatchHeader />
            <video src={videoData[0].video}></video>
        </>
    )
}

export default VideoShare;