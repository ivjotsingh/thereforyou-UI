import React from 'react';
import './App.scss'
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import ChatRom from './components/ChatRoom/ChatRoom';
import 'antd/dist/antd.css';


import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
      <Route path='/chatRoom' component={ChatRom}/>
    </Router>
  );
}

export default App;