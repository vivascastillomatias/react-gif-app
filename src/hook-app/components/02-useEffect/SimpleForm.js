import React, { useEffect, useState } from 'react'

import './effect.css'
import Message from './Message';
function SimpleForm() {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })
    const {name, email} = formState;

    const handleInputChange = ({target}) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    useEffect(()=> {
        console.log('Hey! ')
    }, [])

    useEffect(()=> {
        console.log('El email cambió! ')
    }, [email])

    return (
        <>
            <h1>SimpleForm - useEffect</h1>
            <hr/>
            <div className='form-group'>
                <input type='text'
                    name='name'
                    className='form-control'
                    autoComplete='off'
                    placeholder='Introduce tu nombre'
                    value={name}
                    onChange={handleInputChange}
                />
                <hr/>
                <input type='text'
                    name='email'
                    className='form-control'
                    autoComplete='off'
                    placeholder='Introduce tu email'
                    value={email}
                    onChange={handleInputChange}
                />

                {name === '123' && <Message/>}
            </div>    
        </>
    )
}

export default SimpleForm
