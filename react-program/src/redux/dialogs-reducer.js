const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

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
    ],
    newMessageText: ''
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };

        case ADD_MESSAGE:
            let newText = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                Messages: [...state.Messages, {id: 6, message: newText}]
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;