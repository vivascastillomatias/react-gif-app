import { useEffect, useRef, useState } from 'react'

function useFetch(url) {
    const [state, setState] = useState({ data: null, loading: true, error:null })

    const isMounted = useRef(true)

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        setState({ data: null, loading: true, error:null })
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                    if (isMounted.current) {
                        setState({
                            data: data,
                            loading: false,
                            error:null
                            })
                    }else{
                        console.log('setstate no se llamo')
                    }
                });
    }, [url])

    return state;
}


export default useFetch
