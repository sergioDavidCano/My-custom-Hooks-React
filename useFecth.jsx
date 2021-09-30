import { useState, useEffect, useRef } from 'react';
//Este hook es para el manejo de peticiones con fecth
export const useFecth = (url) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])
    useEffect(() => {
        setState({ data: null, loading: true, error: null })
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    setState({
                        data,
                        loading: false,
                        error: null,
                    })
                }
            });
    }, [url])
    return state;
}
