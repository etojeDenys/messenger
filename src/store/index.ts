import {configureStore} from "@reduxjs/toolkit";
import messageSlice from "./messageSlice";


const store = configureStore({
    reducer: {
        message: messageSlice,
    }
})


export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch