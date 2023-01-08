import React from 'react'
import './Profile.module.css'
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://edtbrustner-reisen.at/wp-content/uploads/2020/07/Meer.png"
                    alt=""/>
            </div>
            <div>
                ava +discription
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;