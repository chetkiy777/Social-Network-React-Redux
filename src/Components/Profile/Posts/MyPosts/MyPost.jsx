import React from 'react';
import classes from './MyPost.module.css';
import Post from "../Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";

const MyPost = (props) => {

    let postsData = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostText = props.newPostText

    let newPostElement = React.createRef();


    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/>
                </div>
                <div>
                    <button onClick={ onAddPost }>add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsData}
            </div>
        </div>
    )
}


export default MyPost;