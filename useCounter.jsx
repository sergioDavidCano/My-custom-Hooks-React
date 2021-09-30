import { useState } from 'react';
//Este hook es para manejar un contador de manera sencilla y mas limpia
export const useCounter = (initialState = 10) => {
    const [state, setState] = useState(initialState);
    const increment = () => {
        setState(state + 1);
    };
    const decrement = () => {
        setState(state - 1);
    }
    const reset = () => {
        setState(initialState);
    }
    return {
        state,
        setState,
        reset,
        increment,
        decrement,
    };
}
