import React, {Component} from 'react'; 

class Chat extends Component{
    render() {
        return (
            <div className="outerContainer">
            <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
            <h1> Chat </h1>
        );
    }
}

export default Chat;