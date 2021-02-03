import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import GifGrid from './components/GifGrid'

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['homero'])
    return (

        <>
            <h2>GifExpertApp ! - Curso de React Fernando Herrera</h2>
            <hr/>
            <AddCategory 
                setCategories = {setCategories}
            />
            <hr/>
            <ol>
                {
                    categories.map( (c) =>  (

                    <GifGrid 
                        key={c}
                        category={c}
                    /> 
                    ))
                }
            </ol>
        </>
    )
}
