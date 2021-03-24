// const SET_FRIENDS = 'SET_FRIENDS'


let initialState = {
   friends: [
       {id:1, name: "Andrei", followed: true},
       {id:2, name: "MAks", followed: true},
       {id:3, name: "Dima", followed: true}
   ]
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_FRIENDS:
        //     return {
        //         ...state, friends: state.friends
        //     }
        default:
            return state;
    }
}

// export const setFriend = (friends) => ({type: SET_FRIENDS, friends})

export default friendsReducer;