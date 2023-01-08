import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
    _state: {
        profilePage: {
            postData: [
                {message: 'Hello world!!!', likeCount: 'like 15'},
                {message: 'How are your?', likeCount: 'like 22'},
                {message: 'How many?', likeCount: 'like 55'},
                {message: 'Hi my brat?', likeCount: 'like 28'}
            ],
            newPostText: ''

        },
        diologsPage: {
            diologs: [
                {name: 'Mustafa', id: 0},
                {name: 'Asan', id: 1},
                {name: 'Uson', id: 2},
                {name: 'Akmat', id: 3},
                {name: 'Tashmat', id:4},
                {name: 'Ashmat', id: 5},
                {name: 'Musu', id: 6}
            ],
            messages: [
                {message: 'Hi'},
                {message: 'How are your?'},
                {message: 'Yo'},
                {message: 'Hi'},
                {message: 'How are your?'},
                {message: 'Yo'}],
            newMessageBody: ''
        },
        sidebar: {}
    },
    getState() {
        debugger;
        return this._state;
    },
    _callSubscriber() {
        console.log('Mustafa')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.diologsPage = dialogsReducer(this._state.diologsPage,action)
        this._state.sidebar = sidebarReducer(this._state.sidebar,action)

        this._callSubscriber(this._state);
    }
}


export const addPostActionCreator = () => {return {type: ADD_POST}}

export const updateNewPostTextActionCreator = (text) => {return {type: UPDATE_NEW_POST_TEXT, newText:text}}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body:body})




window.store = store;

export default store;