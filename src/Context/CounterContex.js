import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    const increase = (value) => {
        return setCounter(counter + value);
    }
    const decrease = (value) => {
        if (counter < 1) {
            return;
        }
        return setCounter(counter - value);
    }
    const reset = () => {
        return setCounter(0);
    }

    const value = {
        counter,
        increase,
        decrease,
        reset
    }

    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    );
}

export const useCounter = () => useContext(CounterContext);