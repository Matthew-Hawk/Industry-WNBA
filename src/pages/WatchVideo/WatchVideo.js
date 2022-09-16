import './WatchVideo.scss'
import { useState } from 'react';
import thumbnail from '../../assets/images/video-thumbnail.png';
import heartIcon from '../../assets/icons/heart.svg';
import shareIcon from '../../assets/icons/share.svg';
import statsIconInactive from '../../assets/icons/analytics-inactive.svg';
import statsIconActive from '../../assets/icons/analytics-active.svg';
import videoData from '../../data/youtube-data.json';
import WatchHeader from '../../components/WatchHeader/WatchHeader';
import Comments from '../../components/Comments/Comments';
import CourtAnalytics from '../../components/CourtAnalytics/CourtAnalytics';

const WatchVideo = () => {
    const [ showAnalytics, setShowAnalytics ] = useState(false);
    const [ likeVideo, setLikeVideo ] = useState(false);

    const toggleAnalytics = () => {
        showAnalytics ? setShowAnalytics(false) : setShowAnalytics(true);
    }

    const toggleLike = () => {
        likeVideo ? setLikeVideo(false) : setLikeVideo(true);
    }

    return (
        <main className="watch-live">
            <WatchHeader />
            <video className="watch-live__video" src={videoData[0].video} poster={thumbnail} controls></video>
            <div className="comment-cta">
                <button className="comment-cta__button">ADD COMMENT</button>
                <input className="comment-cta__stats" type="image" src={showAnalytics ? statsIconActive : statsIconInactive} alt="stats" onClick={toggleAnalytics}/>
                <div className="comment-cta__icons">
                    <input className={`comment-cta__like ${likeVideo ? "" : "comment-cta__like--inactive"}`} type="image" src={heartIcon} alt="like" onClick={toggleLike}/>
                    <input className="comment-cta__share" type="image" src={shareIcon} alt="share"/>
                </div>
            </div>
            {showAnalytics ? <CourtAnalytics /> : <Comments />}
        </main>
    )
}

export default WatchVideo;