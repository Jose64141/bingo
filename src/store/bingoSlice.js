import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bingoNumbers: new Array(75).fill(false),
    currentGameGrid: new Array(24).fill(false),
}

export const bingoSlice = createSlice({
    name: 'bingo',
    initialState,
    reducers: {
        changeNumber: (state, action)  => {
            let number = action.payload;
            console.log(number);
            state.bingoNumbers[number] = !state.bingoNumbers[number];
        },
        changePlay: (state, action) => {
            let number = action.payload;
            state.currentGameGrid[number] = !state.currentGameGrid[number];
        },
        resetNumbers: (state) => {
            state.bingoNumbers = new Array(75).fill(false);
        },
        resetGame: (state) => {
            state.currentGameGrid = new Array(24).fill(false);
        }
    }
});

export const selectNumbers = (state) => state.bingo.bingoNumbers;
export const selectGame = (state) => state.bingo.currentGameGrid;
export const {changeNumber, changePlay, resetNumbers, resetGame} = bingoSlice.actions;