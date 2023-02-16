//import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import { usefetchGifs } from '../hooks/usefetchGifs';
//import { getGifs } from '../helpers/getGifs';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = usefetchGifs(category);
    //console.log(images, isLoading);
    // const [counter, setCounter] = useState(10);
    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect(() => {
    // getGifs(category)
    //  .then( newImages => setImages(newImages));
    //     getImages();
    // }, [])

    return (
        <>
            <h3>{category}</h3>
            {/* {
                isLoading
                ? (<h2>Cargando....</h2>)
                : null
            } */}
            {
                isLoading && (<h2>Cargando....</h2>)
            }
                
            
            {/* <h5>{counter}</h5>
            <button onClick={() => setCounter(counter + 1)}>+1</button> */}

            {/*no se usa la palabra reservada class */}
            <div className='card-grid'>
                {
                    images.map((image) => (
                        // images.map(({ id, title }) => (
                        // <li key={image.id}>{image.title}</li>
                        // <li key={id}>{title}</li>
                        <GifItem
                            key={image.id}
                            // title={ image.title}
                            // url={ image.url}
                            {...image} // se usa cuando se tiene muchas propiedades
                        />
                    ))
                }
            </div>
        </>
    )
}
