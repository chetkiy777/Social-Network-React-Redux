import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";





const Dialogs = (props) => {

    let state = props.messagePage

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.Messages.map(m => <Message message={m.message} />)
    let newMessageText = state.newMessageText

    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.onMessageChange(text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}

                <div><textarea placeholder='write new text' onChange={onMessageChange} value={newMessageText}
                               ref={newMessageElement} /></div>
                <div>
                    <button onClick={onAddMessage}>New Message</button>
                </div>


            </div>

        </div>
    )

}

export default Dialogs;