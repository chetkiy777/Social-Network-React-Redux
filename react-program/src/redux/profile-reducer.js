import {profileAPI, userAPI} from "../API/api";


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'How dou you filling?', likesCount: 21},
        {id: 2, message: 'The Best Day', likesCount: 13}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ""
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            let newText = state.newPostText;
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 0}]
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
                default:
            return state;
    }
};

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (newText) => ({type: UPDATE_NEW_POST_TEXT, text: newText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS , status} );

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
};

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
        })
    }
};

export default profileReducer;