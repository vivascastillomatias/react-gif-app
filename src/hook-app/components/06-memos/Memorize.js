import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import './css.css'
import Small from './Small'

function Memorize() {

    const [show, setShow] = useState(true)

    const {counter, increment} = useCounter(10)
    return (
        <div>
            <h1>Memorize - Memo [<Small value={counter}/>]</h1>
            <hr/>
            <button
                className='btn btn-outline-dark'
                onClick={increment}
            >
                +1
            </button>
            <hr/>
            <button
                className='btn btn-outline-info'
                onClick={ () => {setShow(!show)}}
            >
                SHOW/HIDE {JSON.stringify(show)}
            </button>
        </div>
    )
}

export default Memorize
