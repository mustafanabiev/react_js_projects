import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());


    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = (updateNewPostTextActionCreator(text));
        props.dispatch(action);


    }

      return (
        <div className={s.postsBlock}>
            <div>
                my posts
                <div>
                    new posts
                </div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <Post postData={props.postData}/>
            </div>
        </div>
    );
}


export default MyPosts;