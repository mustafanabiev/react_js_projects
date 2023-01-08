const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
       state.newMessageBody = action.body;
    }
    else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = ''
        state.messages.push({id:6 , message: body})
    }

    return state;
}
export default dialogsReducer;