//custom hook
// un hook es una función que retorna algo

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const usefetchGifs = ( category ) => {
    // const [counter, setCounter] = useState(10);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        // getGifs(category)
        //  .then( newImages => setImages(newImages));
        getImages();
    }, []);


    return {
        images,
        isLoading
    }

}

