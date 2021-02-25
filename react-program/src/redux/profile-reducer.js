import {profileAPI} from "../API/api";
const ADD_POST = 'Social_Network/ADD-POST';
const SET_USER_PROFILE = 'Social_Network/SET_USER_PROFILE';
const SET_STATUS = 'Social_Network/SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'How dou you filling?', likesCount: 21},
        {id: 2, message: 'The Best Day', likesCount: 13}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostBody, likesCount: 0}]
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

export const addPost = (newPostBody) => ({type: ADD_POST , newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS , status: status} );

export const getProfile = (userId) => async (dispatch) => {
        let response = await profileAPI.getProfile(userId);
            dispatch(setUserProfile(response.data))
    };

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
            dispatch(setStatus(response.data))
    };


export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
};

export default profileReducer;