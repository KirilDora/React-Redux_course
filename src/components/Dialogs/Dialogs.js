import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) =>{
  
  let dialogsElements = props.state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

  let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

  let newMessageRef = React.createRef();

  let addMessage = () => {
    let text = newMessageRef.current.value;
    alert(text);
  }

  return(
  <div className={s.dialogs}>
    <div className={s.dialogsItems}>
      {dialogsElements}
    </div>
    <div className={s.messages}>
      {messagesElements}
    </div>
    <div>
    <textarea ref={newMessageRef}></textarea>
    </div>
    <div>
      <button onClick={addMessage}>-e</button>
    </div>    
  </div>)
}

export default Dialogs;