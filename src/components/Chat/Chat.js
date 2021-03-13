import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import io from 'socket.io-client';
import React, {useEffect, useState} from 'react';

let socket;
const Chat = () => {


  const user = useSelector((state => state.user));
  const room = useSelector((state => state.room));

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    if(user && room){
      socket = io('https://academlo-chat.herokuapp.com/', {
          query: {
              token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjA0OTVhMWE4NmVjNjFjYmQ4YmE3YzNjIiwiaWF0IjoxNjE1NDE5OTMwLCJleHAiOjE2MTU2NzkxMzB9.i60o7JKcmoLV45EO2EvZOTBwJV19CCNgDqJi5djBPCc"
          }
      });
      socket.emit('join', user, room);
      socket.on('error', error => console.log(error));
    }
  }, [user, room])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages(msgs => [ ...msgs, message ]);
    })
  }, []);

  const send = () => {
    if(message){
      socket.emit('sendMessage', message);
    }
  }
  return(
    <div>
      <h1>Chat</h1>
      <Link to="/">come back</Link>
      <p>{user}, {room}</p>
      <div style={{textAlign: 'center'}}>
        <h3>Messages</h3>
        <ul>
          {messages.map((msg, i) => <li key={i}>{msg}</li>)}
        </ul>
        <input 
        value={message} 
        onChange={(e) => setMessage(e.target.value)}/>
        <button onClick={send}>Send</button>
      </div>
    </div>
  )
}

export default Chat;