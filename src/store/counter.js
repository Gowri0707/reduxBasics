import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: false};
// const counterReducer = (state = initialState , action) => {
//     switch(action.type) {
//         case "Increment":
//             return {...state, counter: state.counter + 1};
//         case "Decrement":
//             return {...state, counter: state.counter - 1};
//         case "Increase":
//             return {...state, counter: state.counter + action.amount};
//         case "toggle": 
//             return {...state, showCounter: !state.showCounter};
//         default:
//             return state;
//     }
// }
const CounterSlice = createSlice({
    name: "Counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        decrement(state) {
            state.counter = state.counter - 1;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

export const CounterActions = CounterSlice.actions;
export default CounterSlice.reducer;
