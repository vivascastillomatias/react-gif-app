import React, { useRef } from 'react'

import './css.css'

function FocusScreen() {

    const inputRef = useRef()
    const handleClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }
    return (
        <div>
            <h1>FocusScreen - useRef</h1>
            <hr/>
            <input
                className='form-control'
                placeholder='Ingrese su nombre'
                ref={inputRef}
            />
            <button 
                className='btn btn-outline-dark'
                onClick={handleClick}
            >Focus</button>
        </div>
    )
}

export default FocusScreen
