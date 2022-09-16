import './Comments.scss';
import heartIcon from '../../assets/icons/heart.svg';
import shareIcon from '../../assets/icons/share.svg';

const Comments = () => {
    return (
        <section className="video-interactions">
            <div className="comment-cta">
                <button className="comment-cta__button">ADD COMMENT</button>
                <div className="comment-cta__icons">
                    <input className="comment-cta__like" type="image" src={heartIcon} alt="like"/>
                    <input className="comment-cta__share" type="image" src={shareIcon} alt="share"/>
                </div>
            </div>
            <div className="live-chat">
                <h2 className="live-chat__title">LIVE CHAT</h2>
            </div>
        </section>
    )
}

export default Comments;