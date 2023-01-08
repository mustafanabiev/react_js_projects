import React from 'react';
import s from './Post.module.css'

const Message = (props) => {
    return (
        <div>
            <div>{props.message}</div>
            <div>{props.likesCount}</div>
        </div>
    )
}

const Post = (props) => {

    let postElements = props.postData.map(post => <Message message={post.message} likesCount={post.likeCount}/>)

    return (
        <div className={s.post}>
            {postElements}
        </div>


    );
}


export default Post;