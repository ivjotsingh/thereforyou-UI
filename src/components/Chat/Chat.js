import React, {useState, useEffect} from 'react'; 
import queryString from 'query-string';
import io, { Socket } from 'socket.io-client';

import './Chat.css'


const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [companion, setCompanion] = useState('');

    // move to env file
    const ENDPOINT = 'localhost:8000'

    useEffect(() => {

        // use props or redux insted
        const {name, companion} = queryString.parse(location.search);

        let socket = io(ENDPOINT)

        setName(name);
        setCompanion(companion);

    }, [ENDPOINT, location.search])

    return (
        <h1>hi</h1>
    );
    
}

export default Chat;