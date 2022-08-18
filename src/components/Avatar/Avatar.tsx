import React from "react";

import avatarByDefault from '../../images/an.png'
import {ReactComponent as CheckSVG} from "../../images/check.svg";

import './avatar.styles.scss'

interface AvatarProps {
    isOnline?: boolean,
    avatarSrc?: string
}

const Avatar: React.FC<AvatarProps> = ({isOnline, avatarSrc}) => {

    return (
        <div className='avatar__container'>
            <img src={avatarSrc ? avatarSrc : avatarByDefault} alt="avatar" className='avatar__img'/>
            {isOnline && <CheckSVG className='avatar__svg'/>}

        </div>
    )
}

export default Avatar