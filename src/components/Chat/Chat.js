import {useSelector} from 'react-redux';
import io from 'socket.io-client';
import {useHistory} from 'react-router-dom';
import {quitRoom} from "../../actions/actionsGenerator.js";
import {useDispatch} from "react-redux";
import React, {useEffect, useState} from 'react';
import UsersBar from './UsersBar.js';
import Message from './Message.js';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import './Chat.css';

const Chat = () => {


  const user = useSelector((state) => state.user);
  const room = useSelector((state) => state.room);
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const background = useSelector((state) => state.backgroundColor);
  const history = useHistory();
  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [socket, setSocket] = useState(null);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    if (token) {
      const connection = io("https://academlo-chat.herokuapp.com/", {
        query: {
          token,
        },
      });

      setSocket(connection);
    }
  }, [token, room]);

  useEffect(() => {
    if (socket) {
      socket.emit("join", { name: user, room: room }, (error) => {
        if (error) {
          console.error(error);
        }
      });

      socket.on("roomData", (data) => {
        setUsers(data.users);
      });
      socket.on("message", (data) => {
        setMessages([...messages, data]);
        console.log(data);
      });
    }
  }, [socket, room, user, messages]);

  const send = () => {
    if(message){
      socket.emit('sendMessage', message, (error) => {
        if(error) {
          console.error(error);
        }
      setMessage("");
      });
    }
  }
  const comeBack = () => {
    dispatch(quitRoom());
    history.push('/join')
  }
  return(
    <div className="chat">
      <input type="checkbox" id="menu"/>
      <div className="messages-layout">
        <UsersBar users={users} comeBack={comeBack}/>
        <div>


          <nav 
          className="nav-bar" 
          style={{background: width <= 576 ? background : isDarkMode ? '#201f1f' : '#f0f0f0',
                  color: width <= 576 || isDarkMode ? 'white' : 'rgb(24, 23, 23)'}}>
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


          <div 
          className="messages-container"
          style={{background: isDarkMode ? '#373636' : 'white'}}>
            {messages.map((msg, i) => <Message key={i} message={msg}/>)}
          </div>


          <div 
          className="input-container"
          style={{background: isDarkMode ? '#201f1f' : '#f0f0f0'}}>
            <div>
              <button
              className="emoticono-button"
              onClick={() => setIsPickerVisible(!isPickerVisible)}>
                <i 
                className="far fa-smile"
                style={{color: isPickerVisible ? background : '#8d8c8cb5'}}></i>
              </button>
              <textarea 
              style={{background: isDarkMode ? '#373636' : 'white'}}
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              placeholder="write a message here"/>
              <button
              style={{background: background}}
              onClick={send}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
          
          <div 
              style={{transform: isPickerVisible ? 'scale(1)' : 'scale(0)'}}
              className="picker">
                <Picker  
                onEmojiClick={(e, emoji) => setMessage(message + emoji.emoji)} 
                skinTone={SKIN_TONE_MEDIUM_DARK}/>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Chat;