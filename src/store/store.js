import {configureStore} from '@reduxjs/toolkit';
import {bingoSlice} from "./bingoSlice";

export const store = configureStore({
    reducer: {
        bingo: bingoSlice.reducer
    },
});
