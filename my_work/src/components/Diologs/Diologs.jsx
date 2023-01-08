import React from 'react';
import s from './Diologs.module.css'
import DiologsItem from "./DiologItem/DiologItem";
import Message from "./Message/Message";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/state";

const Diologs = (props) => {
    let state = props.store.getState().diologsPage;


    let diologsElements = state.diologs.map( diolog => <DiologsItem name={diolog.name} id={diolog.id} />)
    let messageElements = state.messages.map(message => <Message message={message.message}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.diologs}>
            <div className={s.diologsItem}>
                {diologsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
                <div><button onClick={ onSendMessageClick }>Send</button></div>
            </div>
            
        </div>
    );

}

export default Diologs;