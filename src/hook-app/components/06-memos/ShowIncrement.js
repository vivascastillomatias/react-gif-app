import React from 'react';


const ShowIncrement = React.memo(({increment}) => {

    console.log('Me volvi a generar :((')
    return (
        <button 
            className='btn btn-outline-dark'
            onClick={() => {increment(1)}}
        >
            Incrementar +1
        </button>
    )
})

export default ShowIncrement
