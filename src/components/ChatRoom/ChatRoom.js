import React from 'react'
import { Row, Col } from 'antd'
import ChatMembers from './chatMembers/chatMembers'
import Chats from './chats/chats'
class ChatRoom extends React.Component {
    render() {
        return (
            <div className="chat-room">
                <Row>
                    <Col xs={24} sm={24} md={12} lg={6} xl={7}>
                        <ChatMembers/>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={13}>
                        <Chats/>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6} xl={4}>
                        col3
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ChatRoom