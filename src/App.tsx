import React, {useEffect, useState} from 'react';
import Messenger from "./components/Messenger/Messenger";

import './App.css';
import {Routes, Route} from "react-router-dom";
import Chat from "./components/Chat/Chat";



function App() {
    const [mediaMatch, setMediaMatch] = useState(false)
    useEffect(() => {
        setMediaMatch(window.matchMedia('(max-width:740px)').matches)
    }, []);
    if (mediaMatch) {
        return (
            <>
                <Routes>
                    <Route path='/' element={<Messenger/>}/>
                    <Route path='/chat/:uid' element={<Chat/>}/>
                    <Route path='*' element={<h1>Page not found</h1>}/>
                </Routes>
            </>
        )
    }

    return (
        <>
            <Routes>
                <Route path='/' element={<Messenger/>}>
                    <Route path='chat/:uid' element={<Chat/>}/>
                </Route>
                <Route path='*' element={<h1>Page not found</h1>}/>
            </Routes>
        </>
    );
}

export default App;
