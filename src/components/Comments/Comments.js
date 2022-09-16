import './Comments.scss';
import heartIcon from '../../assets/icons/heart.svg';

const Comments = () => {
    return (
        <section className="comments">
            <div className="comment-cta">
                <button className="comment-cta__button">Add Comment</button>
                <div className="comment-cta__icons">
                    <input className="comment-cta__like" type="image" src={heartIcon} alt="like"/>
                    <input className="comment-cta__share" type="image" src={heartIcon} alt="share"/>
                </div>
            </div>
            
            
        </section>
    )
}

export default Comments;