import { createSlice } from '@reduxjs/toolkit';

export const envModeSlice = createSlice({
    name: 'envMode',
    initialState: { isTelegram: false },
    reducers: {
        setIsTelegram(state, action) {
            state.isTelegram = action.payload;
        },
    },
});

export const { setIsTelegram } = envModeSlice.actions;
