import {securityAPI} from "../API/api";

const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const SET_PEOPLES = 'SET_PEOPLES'

const initialState = {
    peoples: [],
    isFetching: false
}


const starwarsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PEOPLES:
            return {
                ...state, peoples: [...state.peoples, action.peoples]
            }
        case  TOGGLE_FETCHING:
            return {
                ...state, isFetching: true
            }
        default:
            return state
    }
}

export const setPeopleSuccess = (peoples) => ({type: SET_PEOPLES, payload: {peoples}})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})

export const setPeople = () => async (dispatch) => {
    const response = await securityAPI.getStarWars()
    const peoples = response
    dispatch(setPeopleSuccess(peoples))
}

export default starwarsReducer