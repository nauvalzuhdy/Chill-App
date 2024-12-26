import { createSlice } from "@reduxjs/toolkit";
import {users} from '../redux/Data.jsx'


const userSlice = createSlice ({
    name: "users",
    initialState: users,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const {addUser} = userSlice.actions;
export default userSlice.reducer;