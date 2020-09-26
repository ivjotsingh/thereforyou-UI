import React from 'react'
import './chats.scss'
import User from '../../../images/user.jpg'
import { MoreOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Chat } from './config'
import {Input} from 'antd'


function chats() {
    console.log("hey")
    // var width=React.findDOMNode(this.refs.chatting).width()
    // console.log(width)
    return (
        <div className="chats">
            <div className="chat-header">
                <div className="image">
                    <img src={User} alt="logo" />
                </div>
                <div className="actions">
                    <MoreOutlined />
                </div>
            </div>
            <div className="chat-section">
                {
                    Chat.map((item, index) => {
                        const { user, message, time } = item;
                        if (user == 'receiver') {
                            return (
                                <div className= "chat-details" key={index}>
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
            <div className="send-message">
                <div className="add-item">
                <PlusCircleOutlined />
                </div>
                <div className="input-message">
                    <Input type="text" placeholder="Feel free to share your thoughts here!"></Input>
                </div>
            </div>
        </div>
    )
}

export default chats