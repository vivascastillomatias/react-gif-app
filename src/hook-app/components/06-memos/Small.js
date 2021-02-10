import React from 'react'

const Small = React.memo ( 
    ({value}) => {
        console.log('se llama <Small/>')
        return (
            <small>
            {value}
        </small>
        )
    }
)


export default Small