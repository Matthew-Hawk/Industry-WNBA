import './Comments.scss';
import heartIcon from '../../assets/icons/heart.svg';

const Comments = () => {
    return (
        <section className="comments">
            <button className="comment-button">Add Comment</button>
            <input type="image" src={heartIcon} alt="like"/>
        </section>
    )
}

export default Comments;