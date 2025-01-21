// redux/chatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [],
        newMessages: {} // Track new messages per user
    },
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        addMessage: (state, action) => {
            const { message } = action.payload;
            state.messages.push(message);
            if (!state.newMessages[message.senderId]) {
                state.newMessages[message.senderId] = [];
            }
            state.newMessages[message.senderId].push(message);
        },
        clearNewMessages: (state, action) => {
            const { userId } = action.payload;
            state.newMessages[userId] = [];
        }
    }
});

export const { setMessages, addMessage, clearNewMessages } = chatSlice.actions;
export default chatSlice.reducer;
