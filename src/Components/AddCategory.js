import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
// trim() es para que no tenga espacios adelante ni atras
        if (inputValue.trim().length > 2) {
            // No podemos usar categories porque desde este componente no tenemos acceso, entonces se usa este metodo
            setCategories( cats => [ inputValue, ...cats])
            setInputValue('')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange} />
            </form>
        </>
    )
}


AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
