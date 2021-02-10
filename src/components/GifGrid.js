// import React, {useState, useEffect} from 'react'
import React from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs'
// import getGifs from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({category}) {

    // const [images, setImages] = useState([])

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>
        { loading && <p className='animate__animated animate__flash'>loading...</p>}
        <div className='card-grid'>
            {
                images.map((img) => {
                    return <GifGridItem key={img.id} {...img}></GifGridItem>
                })
            }
        </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
