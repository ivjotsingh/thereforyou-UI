import React from 'react'
import './chatMembers.scss'
import { Row, Col } from 'antd'
import Logo from '../../../images/logo.png'
import {Data} from './config'


function chatMembers() {
    return (
        <div>
            <div className="chat-header">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="user-name">
                    <p>User Name</p>
                </div>
            </div>
            <div className="chat-heading">
                <div className="my-chats">
                    <p>My chats</p>
                </div>
                <div className="unread-count">
                    <p><span>1</span>Unread</p>
                </div>
            </div>
            {
                Data.map((item, index) => {
                    const { image, name, time, message } = item;
                    return (
                        <div className="user-chats" key={index}>
                            <div className="image">
                                <img src={image} alt="UserImage" />
                            </div>
                            <div className="details">
                                <div className="flex">
                                    <p className="name">{name}</p>
                                    <p className="time">{time}</p>
                                </div>
                                <p className="message">{message}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default chatMembers