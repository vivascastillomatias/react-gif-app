import React, { useEffect} from 'react'
import useForm from '../../hooks/useForm';

import './effect.css'
import Message from './Message';
function FormWithCustomHook() {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });
    const {name, email, password} = formValues;

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues)
    }

    useEffect(()=> {
        console.log('El email cambió! ')
    }, [email])
    return (
        <form onSubmit={handleSubmit} className='__form'>
            <h2>FormWithCustomHook</h2>
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
                <input type='text'
                    name='email'
                    className='form-control'
                    autoComplete='off'
                    placeholder='Introduce tu email'
                    value={email}
                    onChange={handleInputChange}
                />
                <input type='password'
                    name='password'
                    className='form-control'
                    autoComplete='off'
                    placeholder='Introduce tu contraseña'
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            {name === '123' && <Message/>}

            <input type='submit' className='btn btn-dark' value='Guardar!'/>
        </form>
    )
}

export default FormWithCustomHook
