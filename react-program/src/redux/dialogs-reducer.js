const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dialogsData: [
        {id: 1, name: 'Gladkiy'},
        {id: 2, name: 'Vovchik'},
        {id: 3, name: 'Kohanchuk'},
        {id: 4, name: 'Artemon'},
        {id: 5, name: 'Hodakovskiy'},
        {id: 6, name: 'Gladkaya'}
    ],
    Messages: [
        {id: 1, message: 'Hello World'},
        {id: 2, message: 'Im fine, and you?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Yo!'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newText = action.newMessageBody
            return {
                ...state,
                Messages: [...state.Messages, {id: 6, message: newText}]
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE , newMessageBody})

export default dialogsReducer;