import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const isMonted = useRef(true);

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {

        return () => {

            isMonted.current = false;

        }

    }, [])

    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isMonted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });

                }

            })

    }, [url])

    return state;

}
