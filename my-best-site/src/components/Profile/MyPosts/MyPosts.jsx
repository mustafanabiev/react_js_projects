import React from 'react'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div>
                New posts
            </div>
            <div className='posts'>
                <Post likecount='0' message='Hi , how are you?'/>
                <Post likecount='23' message="It's my first site "/>

            </div>
        </div>

    )
}

export default MyPosts;