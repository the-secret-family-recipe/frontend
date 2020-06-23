import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'



const initialState = {

    recipe_image: null,
    title: "",
    categories: '',
    prepTime: null,
    cookTime: null,
    calories: null,
    servings: null,
    description: "",
    ingredients: "",
    directions: "",
    Notes: null,
    source: '',
    bio: null,
    source_image: null
}


const AddRecipe = () => {
    const [newRecipeValues, setNewRecipeValues] = useState(initialState)
    const history = useHistory()

    const changeHandler = e => {
        e.preventDefault()
        setNewRecipeValues({
            ...newRecipeValues,
            [e.target.name]: e.target.value
        })
    }

    const addRecipe = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('api/recipes', newRecipeValues)
            .then(res => {
                console.log('post new recipe', res)
            })
            .catch(err => console.log(err))
            .finally(
                history.push('/member-page')
            )
        
    }
    return (
        <>

            <h2>Add a Recipe to Your Collection</h2>
            <form onSubmit={(e) => addRecipe(e)}>
                <label>Title:</label>
                <input 
                    type='text'
                    name='title'
                    value={newRecipeValues.title}
                    onChange={(e) => changeHandler(e)}
                />
                <label>Categories:</label>
                <input 
                    type='text'
                    name='categories'
                    value={newRecipeValues.categories}
                    onChange={(e) => changeHandler(e)}
                />
                <label>Source:</label>
                <input 
                    type='text'
                    name='source'
                    value={newRecipeValues.source}
                    onChange={(e) => changeHandler(e)}
                />
                <label>Ingredients:</label>
                <textarea 
                    cols='25'
                    rows='4'
                    type='text'
                    name='ingredients'
                    value={newRecipeValues.ingredients}
                    onChange={(e) => changeHandler(e)}
                />
                <label>Directions:</label>
                <textarea 
                    cols='25'
                    rows='4'
                    type='text'
                    name='directions'
                    value={newRecipeValues.directions}
                    onChange={(e) => changeHandler(e)}
                />
                <label>Description:</label>
                <textarea 
                    cols='25'
                    rows='4'
                    type='text'
                    name='description'
                    value={newRecipeValues.description}
                    onChange={(e) => changeHandler(e)}
                />
                <button >Add Recipe</button>
            </form>
        </>
    )
}
export default AddRecipe