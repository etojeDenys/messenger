import {createSlice} from "@reduxjs/toolkit";
import nazarAvatar from "../images/nazarAvatar.jpg";
import denysAvatar from "../images/denysAvatar.jpg";
import maksymAvatar from "../images/maksymAvatar.jpg";
import avatar1 from "../images/avatar1.jpeg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";
import avatar4 from "../images/avatar4.jpg";
import avatar5 from "../images/avatar5.jpg";
import {IUser} from "../components/Messenger/Messenger";

interface IInitialState {
    users: Array<IUser>
}

const initialState: IInitialState = {
    users: [
        {
            displayName: 'Nazar',
            avatarSrc: nazarAvatar,
            uid: 'nazar322228',
            isChecked: true,
            messages: [
                {text: 'Hey how are you?', uid: 'nazar', date: new Date('2022-08-10T12:05').toString()},
                {text: 'great, you?', uid: 'user', date: new Date('2022-08-10T13:11').toString()},
                {text: 'Not bad :)', uid: 'nazar', date: new Date('2022-08-11T01:05').toString()},
            ]
        }, {
            displayName: 'Denys',
            avatarSrc: denysAvatar,
            uid: 'denys',
            isChecked: true,
            messages: [
                {
                    text: 'Are you the developer of this messenger?',
                    uid: 'user',
                    date: new Date('2022-08-13T16:33').toString()
                },
                {text: 'y', uid: 'denys', date: new Date('2022-08-13T17:11').toString()},
                {
                    text: 'there are things to improve, but in general I like everything!',
                    uid: 'user',
                    date: new Date('2022-08-13T17:13').toString()
                },
                {text: 'wait for the letter in your email', uid: 'user', date: new Date('2022-08-13T17:15').toString()},
                {text: 'Congratulations', uid: 'user', date: new Date('2022-08-13T17:16').toString()},
                {text: 'thank you', uid: 'denys', date: new Date('2022-08-13T17:22').toString()},
            ]
        }, {
            displayName: 'Maksym',
            avatarSrc: maksymAvatar,
            uid: 'maksym',
            isChecked: true,
            messages: [
                {
                    text: 'Have you already received a message from Reenbit?',
                    uid: 'maksym',
                    date: new Date('2022-08-15T21:21').toString()
                },
                {text: 'not yet, still waiting', uid: 'user', date: new Date('2022-08-15T21:22').toString()},
                {text: 'not yet, still waiting', uid: 'user', date: new Date('2022-08-15T21:22').toString()},
            ]
        }, {
            displayName: 'Barrera',
            avatarSrc: avatar1,
            uid: 'barrera',
            isChecked: true,
            messages: []
        }, {
            displayName: 'Josefine Joshy',
            avatarSrc: avatar2,
            uid: 'Josy',
            isChecked: true,
            messages: []
        }, {
            displayName: 'Mike',
            avatarSrc: '',
            uid: 'mikeCool',
            isChecked: true,
            messages: [
                {text: 'Mike', uid: 'user', date: new Date('2022-08-12T10:47').toString()},
                {text: 'Where is your avatar?', uid: 'user', date: new Date('2022-08-12T10:48').toString()},
                {text: 'idk', uid: 'mikeCool', date: new Date('2022-08-12T11:00').toString()},
                {
                    text: 'the developer decided not to give it to me...',
                    uid: 'mikeCool',
                    date: new Date('2022-08-12T11:02:43').toString()
                },
                {text: 'D:', uid: 'mikeCool', date: new Date('2022-08-12T11:02:43').toString()},
            ]
        }, {
            displayName: 'Alice Freeman',
            avatarSrc: avatar3,
            uid: 'freeAlice',
            isChecked: true,
            messages: []
        }, {
            displayName: 'Andrew Freeman',
            avatarSrc: avatar4,
            uid: 'freeAndrew',
            isChecked: true,
            messages: []
        }, {
            displayName: 'Hutsul from Ivano-Frankivsk',
            avatarSrc: avatar5,
            uid: 'hutsul322228',
            isChecked: true,
            messages: []
        },
    ]
}


const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addMessageToRedux(state, action) {
            state.users.map(user => {
                if (user.uid === action.payload.uid) {
                    user.messages.push(action.payload.message)
                    user.isChecked = action.payload.isChecked
                }
                return user
            })
            localStorage.setItem('users', JSON.stringify(state.users))
        },
        toggleIsChecked(state, action) {
            state.users.map(user => {
                if (user.uid === action.payload) {
                    user.isChecked = true
                }
                return user
            })
            localStorage.setItem('users', JSON.stringify(state.users))
        },
        getUsers(state) {
            const usersString = localStorage.getItem('users')
            if (usersString) {
                state.users = JSON.parse(usersString)
            }
        }
    }
})

export const {
    addMessageToRedux,
    getUsers,
    toggleIsChecked
} = messageSlice.actions

export default messageSlice.reducer
