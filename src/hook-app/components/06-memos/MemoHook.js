import React, { useMemo, useState } from 'react'
import heavyProcess from '../../helpers/heavyProcess'
import useCounter from '../../hooks/useCounter'
import './css.css'

function MemoHook() {

    const [show, setShow] = useState(true)

    const {counter, increment} = useCounter(500)

    const memoProcess = useMemo(() => heavyProcess(counter), [counter])


    return (
        <div>
            <h1>MemoHook - useMemo</h1>
            <h3>Memorize - Memo {counter}</h3>
            <hr/>
            <p>{memoProcess}</p>
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

export default MemoHook
