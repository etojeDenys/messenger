import React from "react";
import {IMessage} from "../Chat/Chat";
import Avatar from "../Avatar/Avatar";

import './user-preview.styles.scss'
import {useNavigate} from "react-router-dom";

interface UserPreviewProps {
    displayName: string,
    avatarSrc: string,
    message: IMessage,
    uid: string,
    isChecked: boolean
}

const UserPreview: React.FC<UserPreviewProps> = ({displayName, uid, avatarSrc, message, isChecked}) => {
    const navigate = useNavigate()
    let date = new Date()
    if (message) {
        date = new Date(message.date)
    }

    return (
        <div className={`user-preview__container ${!isChecked ? 'user-preview__container-notChecked':''}`} onClick={() => navigate(`/chat/${uid}`)}>
            <div className='user-preview'>
                <Avatar isOnline avatarSrc={avatarSrc}/>
                <div className='user-preview__body'>
                    <p className='user-preview__name'>{displayName}</p>
                    {message && <span className='user-preview__message'>{message.text}</span>}
                </div>
            </div>
            {!isChecked &&
            <div className='unread-message'/>
            }
            {(message && isChecked) &&
            <span className='user-preview__date'>{date.toLocaleDateString('en-US', {
                month: 'short',
                day: "numeric",
                year: "numeric"
            })}</span>}
        </div>
    )
}

export default UserPreview