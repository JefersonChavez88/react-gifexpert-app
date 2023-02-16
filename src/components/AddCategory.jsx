import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({ target }) => {
        //const onInputChange = (event) => {
        //console.log(event.target.value);
        setinputValue(target.value);

    }

    const onSubmit = (event) => {
        //console.log(event);
        event.preventDefault();
        //console.log(inputValue);
        if (inputValue.trim().length <= 1) return;

        //setCategories(categories => [inputValue, ...categories]);
        setinputValue('');
        onNewCategory( inputValue.trim() );

    }

    return (
        // <form onSubmit={(event) => onSubmit(event)}>
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                //onChange={ (event) => onInputChange(event) }
                onChange={onInputChange}
            />
        </form>
    )
}