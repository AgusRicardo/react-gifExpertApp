import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
        // Si la categoria cambia, queremos que se vuelva a ejecutar el useEffect, por eso se la mandamos como dependecia
    useEffect( () => {
        getGifs(category)
            .then(img => {
                    setState({
                        data: img,
                        loading: false
                    });             
            })

    }, [category])

    return state; // esto regresa {data:[], loading: true}
}