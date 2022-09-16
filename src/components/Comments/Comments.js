import './Comments.scss';

const Comments = () => {
    return (
        <section class="comments">
                <h2 class="section-heading">Join the Conversation</h2>
                <div class="new-comment">
                    <div class="avatar avatar--image"></div>
                    <form class="comment-form" action="./index.html" method="POST">
                        <div class="comment-form__line">
                            <label class="comment-form__label" for="comment-name">NAME</label>
                            <input class="comment-form__input" type="text" id="comment-name" name="commentName" placeholder="Enter your name"/>
                        </div>
                        <div class="comment-form__line">
                            <label class="comment-form__label" for="comment-text">COMMENT</label>
                            <textarea class="comment-form__input comment-form__input--textarea" id="comment-text" name="commentText" placeholder="Add a new comment"></textarea>
                        </div>
                        <button class="comment-form__button button">COMMENT</button>
                    </form>
                </div>
                <div class="comments-container"></div>
            </section>
    )
}

export default Comments;