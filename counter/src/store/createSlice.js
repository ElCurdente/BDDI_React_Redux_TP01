import { configureStore, createSlice } from '@reduxjs/toolkit';
import middleware from './middleware';

/**
 * Regroupe (synthèse) de REDUX, ce que l'on fait habituellement est agrégé dans createSlice
 */
const counter = createSlice({
    name: 'counter',
    initialState: { count: 0, showStar: false },
    reducers: {
        increment: (state) => {
            state.count += Math.floor(Math.random() * 10) + 1;
        },
        showStar: (state, action) => {
            state.showStar = action.payload;
            console.log("showStar", state.showStar);
        }
    },
});

export const store = configureStore({
    reducer: {
        counter: counter.reducer,
    },
    middleware: [middleware],
});

export const { increment, showStar } = counter.actions;