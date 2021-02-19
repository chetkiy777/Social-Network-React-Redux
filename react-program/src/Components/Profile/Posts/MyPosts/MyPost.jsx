import React from 'react';
import classes from './MyPost.module.css';
import Post from "../Post";
import {Field, reduxForm} from "redux-form";

const MyPost = (props) => {

    let postsData = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
                <AddNewPostReduxForm onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {postsData}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostBody" placeholder="write message"/>
            </div>
            <div>
                <button>add Post</button>
            </div>
        </form>
    )
};

const AddNewPostReduxForm = reduxForm({form: "addNewPost"})(AddNewPostForm)

export default MyPost;