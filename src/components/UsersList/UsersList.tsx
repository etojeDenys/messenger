import React, {useState} from "react";
import UserPreview from "../UserPreview/UserPreview";
import {useAppSelector} from "../../hook";

import './users-list.styles.scss'
import Avatar from "../Avatar/Avatar";


const UsersList: React.FC = () => {
    let users = [...useAppSelector(state => state.message.users)]
    users.sort((a, b) => {
        if (!b.messages.length) {
            return -1
        }
        if (!a.messages.length) {
            return 1
        }
        return +new Date(b.messages[b.messages.length - 1].date) - +new Date(a.messages[a.messages.length - 1].date)
    })




    const [filter, setFilter] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)
    }
    const filteredUsers = filter ? users.filter(user => user.displayName.toLowerCase().includes(filter.toLowerCase())) : users
    return (
        <div className='users__container'>
            <div className="user__avatar">
                <Avatar isOnline/>
            </div>
            <div className="users__filter">
                <input type="text" value={filter} onChange={handleChange} placeholder={'🔍 Search or start new chat'}/>
            </div>
            <h3>Chats</h3>
            <div className="users">
                {filteredUsers.map(({displayName, uid, avatarSrc, messages,isChecked}) => (
                    <UserPreview
                        key={uid}
                        uid={uid}
                        isChecked={isChecked}
                        displayName={displayName}
                        avatarSrc={avatarSrc}
                        message={messages[messages.length - 1]}
                    />
                ))}
            </div>
        </div>
    )
}

export default UsersList