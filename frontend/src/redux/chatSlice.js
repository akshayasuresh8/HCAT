import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        onlineUsers: [],
        messages: [],
        newMessages: {} // Add this if not already present
    },
    reducers: {
        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload;
        },
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        clearNewMessages: (state, action) => {
            const { userId } = action.payload;
            state.newMessages[userId] = [];
        }
    }
});

export const { setOnlineUsers, setMessages, clearNewMessages } = chatSlice.actions;
export default chatSlice.reducer;
