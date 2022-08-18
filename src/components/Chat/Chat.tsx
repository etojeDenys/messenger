import React, {useEffect, useState} from "react";

import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hook";
import {addMessageToRedux, toggleIsChecked} from "../../store/messageSlice";

import {ReactComponent as Arrow} from "../../images/arrow.svg";
import Avatar from "../Avatar/Avatar";
import Message from "../Message/Message";
import TextField from "../TextField/TextField";

import './chat.styles.scss'

export interface IMessage {
    text: string,
    date: string,
    uid: string
}

const Chat: React.FC = () => {
    const {uid} = useParams()
    const navigate = useNavigate()
    const users = useAppSelector(state => state.message.users)
    const user = users.find(x => x.uid === uid)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (user && uid) {
            dispatch(toggleIsChecked(uid))
            setMessages(user.messages)
        }
    }, [uid, users, user, dispatch])

    const [messages, setMessages] = useState<Array<IMessage>>([])
    const addMessage = (str: string) => {
        const message = {text: str, date: new Date().toString(), uid: 'user'}
        setMessages([...messages, message])
        dispatch(addMessageToRedux({message: message, uid: uid}))
        setTimeout(() => {
            fetch('https://api.chucknorris.io/jokes/random')
                .then(response => response.json())
                .then(data => {
                    dispatch(addMessageToRedux({
                        message: {text: data.value, date: new Date().toString(), uid: user!.uid},
                        uid: user!.uid,
                        isChecked: false
                    }))
                })
        }, 10000)
    }
    if (!user) {
        return <></>
    }

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Arrow className='back-btn' onClick={() => navigate('/')}/>
                <div className='chat__user'>
                    <Avatar isOnline avatarSrc={user.avatarSrc}/>
                    <span className='chat__name'>{user.displayName}</span>
                </div>

            </div>
            <div className="messages">
                {messages.map(({text, date, uid}, index) => <Message
                    key={index}
                    date={date}
                    text={text}
                    isUserMessage={uid === 'user'}
                    avatarSrc={user.avatarSrc}
                />)}
            </div>
            <div className='send-message__container'>
                <TextField sendMessage={addMessage}/>
            </div>
        </div>
    )
}

export default Chat