import React, { useState } from 'react'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'
import './css.css'

function RealExampleRef() {
    
    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Real example ref - useRef</h1>
            <div className= 'container text-center'>

            <button className ='btn btn-outline-dark' onClick= { () => {setShow(s => !s)}}>SHOW | HIDE</button>
            <hr/>
            { show && <MultipleCustomHooks />}
            </div>
        </div>
    )
}

export default RealExampleRef
