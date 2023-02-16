import { useState } from 'react';
import { AddCategory,GifGrid } from './components';
//import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  // no se debe poner un hook dentro de un condicional
  // if ( true ) {
  // const [categories, setCategories] = useState(['One Punch','Dragon Ball']);
  // }
  const [categories, setCategories] = useState(['One Punch']);
  //console.log(categories);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    console.log(newCategory);
    //categories.push( 'Valorant');el push no se usa en react pq hace mutaciones
    setCategories([newCategory, ...categories]);
    //setCategories( cat => [...cat, 'Valorant' ]);
  }

  return (
    <>

      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* Listado de Gif */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category} />
        ))
      }

      {/* Gif Item */}

    </>

  )
}
