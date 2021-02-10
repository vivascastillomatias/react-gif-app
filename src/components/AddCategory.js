import React, {useState} from 'react'

import PropTypes from 'prop-types';


export function AddCategory({setCategories}) {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories((categories) => [inputValue,...categories])
            setInputValue('')
        }
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <h5>Add Category</h5>
            <input 
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}