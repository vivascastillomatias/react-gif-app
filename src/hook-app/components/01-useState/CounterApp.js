import React, { useState } from 'react'
import './counter.css'

function CounterApp() {

    const [{counter1, counter2}, setCounter] = useState({
        counter1: 10,
        counter2: 20
    })

    const handleAdd1 = () => {
        setCounter( state => ({...state,counter1: counter1 +1}))
    }

    const handleAdd2 = () => {
        setCounter( state => ({...state,counter2: counter2 +1}))
    }

    return (
        <>
            <h1>useState - CounterApp</h1>
            <hr/>
            <div className='row align-center'>
                <h2>Counter 1: {counter1}</h2>
                <h2>Counter 2: {counter2}</h2>
                <hr/>
                <button onClick={handleAdd1} className= 'btn btn-dark'>
                +1 in Counter 1
                </button>
                <hr/>
                <button onClick={handleAdd2} className= 'btn btn-dark'>
                +1 in counter 2
                </button>
            </div>
        </>
    )
}

export default CounterApp
