import React from 'react';
import {addPost, updateNewPostText} from "../../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPost);

export default MyPostContainer;
