import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import { Row, Col } from 'antd'

import ChatMembers from './chatMembers/chatMembers'
import Chats from './chats/chats'

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import '../Chat/Chat.css'

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'http://localhost:8000';

  useEffect(() => {
    const { name, topic } = queryString.parse(location.search);
    const userType = "member";

    socket = io(ENDPOINT);

    setTopic(topic);
    setName(name)

    socket.emit('join', { name, userType, topic }, (error) => {
        if(error) {
            alert(error);
        // call API to store user and create room

      }
    });

    socket.on("disconnect", ({userName, topic}) => {
      console.log(userName)
      console.log(topic)
      
      console.log("disconnected 1again")
    });
  }, [ENDPOINT, location.search]);

  
  useEffect(() => {
    socket.on('message', message => {
        // call API to store message here
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.emit('disconnect', {'userName': name, topic}, (error) => {
        console.log("calling disconnect")
        console.log(name)
        if(error) {
          alert(error);
    };
      });
      socket.off();
    }
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="chat-room">
    <Row style={{height : window.innerHeight}}>
        <Col xs={24} sm={24} md={12} lg={6} xl={7} className="chat-member-column">
            <ChatMembers/>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={13}>
            <InfoBar topic={topic} />
            <Messages messages={messages} name={name}/>
            <Chats message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={4}>
            {/* <TextContainer users={users}/> */}
        </Col>
    </Row>
    </div>

  );
}

export default Chat;
