import React, {useState} from "react";

import {ReactComponent as SendSVG} from "../../images/send.svg";
import './text-field.styles.scss'

interface TextFieldProps {
    sendMessage: (str: string) => void
}

const TextField: React.FC<TextFieldProps> = ({sendMessage}) => {
    const [message, setMessage] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!message) {
            return
        }
        sendMessage(message)
        setMessage('')
    }
    return (
        <form className='text-field' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Type your message'
                value={message}
                onChange={handleChange}
            />
            <button className='svg-btn'>
                <SendSVG className='send__svg'/>
            </button>
        </form>
    )
}

export default TextField