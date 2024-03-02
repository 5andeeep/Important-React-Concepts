import React from 'react'
import { useCounter } from '../Context/CounterContex'

const CounterApp = () => {

    const { counter, increase, decrease, reset } = useCounter();

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <div>
                <button onClick={() => increase(2)} className='border border-green-500'>Increase</button>
                <button onClick={reset} className='border border-blue-500'>Reset</button>
                <button onClick={() => decrease(2)} className='border border-orange-500'>Decrease</button>
            </div>
        </div>
    )
}

export default CounterApp