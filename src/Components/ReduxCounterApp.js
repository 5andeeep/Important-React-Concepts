import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease, reset } from '../Redux/action'

const ReduxCounterApp = () => {

    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={() => dispatch(increase())}>Increase</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button onClick={() => dispatch(decrease())}>Decrease</button>
            </div>
        </div>
    )
}

export default ReduxCounterApp