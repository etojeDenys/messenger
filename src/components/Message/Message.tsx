import React from "react";
import Avatar from "../Avatar/Avatar";

import './message.styles.scss'

interface MessageProps {
    text: string,
    date: string,
    isUserMessage: boolean,
    avatarSrc: string
}

const Message: React.FC<MessageProps> = ({text, date, avatarSrc, isUserMessage}) => {
    const dddd = new Date(date)
    const formatDate = () => {
        const yyyy = dddd.getFullYear()
        let mm = dddd.getMonth() + 1
        let dd = dddd.getDate()

        return [dd, mm, yyyy].join('/')
    }

    return (
        <div className={`message ${isUserMessage ? 'user-message' : ''}`}>
            {!isUserMessage && <Avatar avatarSrc={avatarSrc}/>}
            <div className='message__content'>
                {text}
                <div className="message__date">
                    <span className='date'>{formatDate()}</span>
                    <span className='time'>{dddd.toLocaleTimeString('en-US')}</span>
                </div>
            </div>

        </div>
    )
}

export default Message