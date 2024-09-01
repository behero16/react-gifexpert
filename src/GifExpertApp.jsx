import React, {useState} from 'react'
import {AddCategory, GifGrid} from "./components";

const GifExpertApp = () => {

    // Mantener el estado de listado de categorías y se inicializa como arreglo
    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {
        // Validación si ya existe la categoría
        if (categories.includes(newCategory)) return;

        // Agregamos la categoría nueva al inicio del arreglo
        setCategories([newCategory, ...categories])
    }


    return (
        <>

            <h1>Gif expert App</h1>

            <AddCategory
                onNewCategory={(event) => onAddCategory(event)}
            />


            {
                categories.map((category) => (
                    <GifGrid key={category} category={category}/>
                ))
            }


        </>
    )
}

export default GifExpertApp
