import React from 'react'
import useCounter from '../../hooks/useCounter'

function CounterWithCustomHook() {

    const {state, increment, decrement, reset} = useCounter(100)


    return (
        <>
            <h1>Counter with Hook</h1> 
            <hr/>
                <h2>Counter: {state}</h2>
                <hr/>
            <div className='row'>
                <div className='col'>
                    <button onClick={() => {increment(1)}} className= 'btn btn-dark form-control'>
                    +1 in Counter
                    </button>
                    <hr/>
                    <button onClick={() => {decrement(1)}} className= 'btn btn-dark form-control'>
                    -1 in Counter
                    </button>

                </div>
                <div className='col'>
                    <button onClick={() => {increment(4)}} className= 'btn btn-dark form-control'>
                    +4 in Counter
                    </button>
                    <hr/>
                    <button onClick={() => {decrement(4)}} className= 'btn btn-dark form-control'>
                    -4 in Counter
                    </button>

                </div>
            </div>
            <div className='row m-4'>
                <button onClick={reset} className= 'btn btn-dark form-control'>
                    Reset
                </button>
            </div>
        </>
    )
}

export default CounterWithCustomHook
