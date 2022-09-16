import './Comments.scss';
import liveChatImage from '../../assets/images/live_chat.svg';

const Comments = () => {
    return (
        <div className="live-chat">
            <h2 className="live-chat__title">LIVE CHAT</h2>
            <img className="live-chat__image" src={liveChatImage} alt="live chat"/>
        </div>
    )
}

export default Comments;