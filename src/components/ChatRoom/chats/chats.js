import React from 'react'
import './chats.scss'
import User from '../../../images/user.jpg'
import { MoreOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Chat } from './config'
import { Button, Input } from 'antd'



class Chats extends React.Component {
    constructor(props){
        super(props)
        this.myInput = React.createRef()
        this.state = {
            sendMessagewidth : null
        }
      }
    
    componentDidMount() {
        console.log(this.myInput.current.offsetWidth)
        this.setState({
            sendMessagewidth : this.myInput.current.offsetWidth
        })

    }
    render() {
        return (
            <div className="chats" ref={this.myInput}>
                <div className="chat-header" style={{width : this.state.sendMessagewidth}}>
                    <div className="image">
                        <img src={User} alt="logo" />
                    </div>
                    <div className="actions">
                        <MoreOutlined />
                    </div>
                </div>
                <div className="chat-section" style={{height : window.innerHeight-140}}>
                    {
                        Chat.map((item, index) => {
                            const { user, message, time } = item;
                            if (user === 'receiver') {
                                return (
                                    <div className="chat-details" key={index}>
                                        <p className="receiver-chat chat-message">
                                            {message}
                                        </p>
                                        <p className="time">
                                            {time}
                                        </p>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div className="chat-details sender" key={index}>
                                        <p className="time">
                                            {time}
                                        </p>
                                        <p className="sender-chat chat-message">
                                            {message}
                                        </p>
                                    </div>
                                )
                            }


                        })
                    }
                </div>
                <div className="send-message" style={{width : this.state.sendMessagewidth}}>
                    <div className="add-item">
                        <PlusCircleOutlined />
                    </div>
                    
                    <Input type="text"
                        placeholder="Type a message..."
                        value={this.propsmessage}
                        onChange={({ target: { value } }) => this.props.setMessage(value)}
                        onKeyPress={event => event.key === 'Enter' ? this.props.sendMessage(event) : null}>
                    </Input>

                    <Button onClick={e => this.props.sendMessage(e)}> Send</Button>
                </div>
            </div>
        )
    }
}

export default Chats