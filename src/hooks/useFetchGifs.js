import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs.js";

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getGifsLocal = async () => {
        const newGifs = await getGifs(category)
        setGifs(newGifs)
        setIsLoading(false)
    }

    useEffect(() => {
        getGifsLocal()
    }, []);

    return {
        gifs: gifs,
        isLoading: isLoading,
    }
}
