import React, {useEffect} from "react";
import {IMessage} from "../Chat/Chat";
import UsersList from "../UsersList/UsersList";

import './messenger.styles.scss'
import {Outlet} from "react-router-dom";
import {useAppDispatch} from "../../hook";
import {getUsers} from "../../store/messageSlice";

export interface IUser {
    displayName: string,
    avatarSrc: string,
    uid: string,
    messages: Array<IMessage>,
    isChecked: boolean
}

const Messenger: React.FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);

    return (
        <div className='messenger'>
            <UsersList/>
            <Outlet/>
        </div>
    )
}

export default Messenger