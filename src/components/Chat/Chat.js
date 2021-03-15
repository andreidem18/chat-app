import {useSelector} from 'react-redux';
// import io from 'socket.io-client';
import {useHistory} from 'react-router-dom';
import {quitRoom} from "../../actions/actionsGenerator.js";
import {useDispatch} from "react-redux";
import React, {useEffect, useState} from 'react';
import UsersBar from './UsersBar.js';
import Message from './Message.js';
import './Chat.css';

// let socket;
const Chat = () => {


  const user = useSelector((state) => state.user);
  const room = useSelector((state) => state.room);
  const background = useSelector((state) => state.backgroundColor)
  const history = useHistory();
  const dispatch = useDispatch();

  const [messages, setMessages] = useState([
    {
      message: "hola, ¿cómo estas?",
      user: "Juanete"
    },
    {
      message: "bien, ¿y tú?",
      user: "test"
    },
    {
      message: "bien",
      user: "Juanete"
    },
    {
      message: "muchachos, el chat no funciona",
      user: "Pepito"
    },
    {
      message: "hola, ¿cómo estas?",
      user: "Juanete"
    },
    {
      message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ab perferendis fugit rerum quia velit, sunt eaque autem, blanditiis porro a animi ducimus natus at temporibus id eum magni ex!",
      user: "test"
    },
    {
      message: "bien",
      user: "Juanete"
    },
    {
      message: "muchachos, el chat no funciona",
      user: "Pepito"
    },
    {
      message: "hola, ¿cómo estas?",
      user: "Juanete"
    },
    {
      message: "bien, ¿y tú?",
      user: "test"
    },
    {
      message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ab perferendis fugit rerum quia velit, sunt eaque autem, blanditiis porro a animi ducimus natus at temporibus id eum magni ex!",
      user: "Juanete"
    },
    {
      message: "muchachos, el chat no funciona",
      user: "Pepito"
    },
  ]);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState(["Pepito", "Test", "Juanete"]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

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
      <div className="messages-layout">
        <UsersBar users={users} comeBack={comeBack}/>
        <div style={{width: '100%'}}>
          <nav 
          className="nav-bar" 
          style={{background: width <= 576 ? background : 'white'}}>
            <div>
              <button onClick={comeBack}>
                <i className="fas fa-chevron-left"></i>
              </button>
            </div>
            <div>{room}</div>
            <div>
              <label htmlFor="menu">
                <i className="fas fa-bars"></i>
              </label>
            </div>
          </nav>
          <div className="messages-container">
            {messages.map((msg, i) => <Message key={i} message={msg}/>)}
          </div>
          <input 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}/>
          {/* <button onClick={send}>Send</button> */}
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Chat;