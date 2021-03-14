import {useSelector} from 'react-redux';
// import io from 'socket.io-client';
import {useHistory} from 'react-router-dom';
import {quitRoom} from "../../actions/actionsGenerator.js";
import {useDispatch} from "react-redux";
import React, {useEffect, useState} from 'react';
import UsersBar from './UsersBar.js';
import './Chat.css';

// let socket;
const Chat = () => {


  const user = useSelector((state) => state.user);
  const room = useSelector((state) => state.room);
  const background = useSelector((state) => state.backgroundColor)
  const history = useHistory();
  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState(["Pepito", "Test", "Juanete"]);
  
  // useEffect(() => {
  //   if(user && room){
  //     socket = io('https://academlo-chat.herokuapp.com/', {
  //         query: {
  //             token:
  //               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjA0OTVhMWE4NmVjNjFjYmQ4YmE3YzNjIiwiaWF0IjoxNjE1NDE5OTMwLCJleHAiOjE2MTU2NzkxMzB9.i60o7JKcmoLV45EO2EvZOTBwJV19CCNgDqJi5djBPCc"
  //         }
  //     });
  //     socket.emit('join', user, room);
  //     socket.on('error', error => console.log(error));
  //   }
  // }, [user, room])

  // useEffect(() => {
  //   socket.on('message', (message) => {
  //     setMessages(msgs => [ ...msgs, message ]);
  //   })
  // }, []);

  // const send = () => {
  //   if(message){
  //     socket.emit('sendMessage', message);
  //   }
  // }
  const comeBack = () => {
    dispatch(quitRoom());
    history.push('/join')
  }
  return(
    <div className="chat">
      <input type="checkbox" id="menu"/>
      <nav className="nav-bar" style={{background: background}}>
        <button onClick={comeBack}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <div>{room}</div>
        <label for="menu" class="menu">
          <i className="fas fa-bars"></i>
        </label>
      </nav>
      <UsersBar users={users}/>
      <div style={{textAlign: 'center'}}>
        <h3>Messages</h3>
        <ul>
          {messages.map((msg, i) => <li key={i}>{msg}</li>)}
        </ul>
        <input 
        value={message} 
        onChange={(e) => setMessage(e.target.value)}/>
        {/* <button onClick={send}>Send</button> */}
        <button>Send</button>
      </div>
    </div>
  )
}

export default Chat;