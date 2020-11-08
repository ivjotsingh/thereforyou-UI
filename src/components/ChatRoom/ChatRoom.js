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
  const ENDPOINT = 'http://localhost:5000';

  useEffect(() => {
    const { name, topic } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setTopic(topic);
    setName(name)

    socket.emit('join', { name, topic }, (error) => {

        if(error) {
            alert(error);
        // call API to store user and create room

      }
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
             Question online icon near hamburger menu 
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={13}>
            <InfoBar topic={topic} />
            <Chats/>
            <Messages messages={messages} name={name} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={4}>
            <TextContainer users={users}/>
        </Col>
    </Row>
    </div>

  );
}

export default Chat;
