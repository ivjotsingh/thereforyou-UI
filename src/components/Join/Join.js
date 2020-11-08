import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [topic, settopic] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Welcome, someone is there for you</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="What do you want to talk about" className="joinInput mt-20" type="text" onChange={(event) => settopic(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !topic) ? e.preventDefault() : null} to={`/chatRoom?name=${name}&topic=${topic}`}>
          <button className={'button mt-20'} type="submit">Find me a friend</button>
        </Link>
      </div>
    </div>
  );
}