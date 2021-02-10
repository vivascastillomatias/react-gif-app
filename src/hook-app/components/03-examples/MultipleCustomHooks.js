import React from 'react'
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch'
import './effect.css'
function MultipleCustomHooks() {

    const {counter, increment} = useCounter(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {quote, author, series} = !!data && data[0];


    return (
        <div>
            <h1>Multiple custom hooks</h1>
            <h2>BreakingBad Quotes</h2>

            {
                loading ? (
                    <div className='alert alert-info text-center'>Loading..</div>
                    ):(
                    <blockquote className="blockquote text-center">
                        <p className="mb-3">{quote}</p>
                        <footer className="blockquote-footer">{author} in <cite title="Source Title">{series}</cite></footer>
                    </blockquote>
                )
            }

            <button className=' btn btn-outline-dark' onClick={increment}>Siguiente frase</button>
        </div>
    )
}

export default MultipleCustomHooks
