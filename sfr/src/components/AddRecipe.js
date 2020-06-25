import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'

import UpdateStyles from '../styles/UpdateStyles'



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
        <UpdateStyles>
            <div className='form-container'>
                <h2>Add a Recipe to Your Collection</h2>
                <form onSubmit={(e) => addRecipe(e)}>
                    <div className='input-container'>
                        <label>Title:</label>
                        <input 
                            type='text'
                            name='title'
                            value={newRecipeValues.title}
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <div className='input-container'>
                        <label>Categories:</label>
                        <input 
                            type='text'
                            name='categories'
                            value={newRecipeValues.categories}
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <div className='input-container'>
                        <label>Source:</label>
                        <input 
                            type='text'
                            name='source'
                            value={newRecipeValues.source}
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <div className='input-container'>
                        <label>Ingredients:</label>
                        <textarea 
                            cols='25'
                            rows='4'
                            type='text'
                            name='ingredients'
                            value={newRecipeValues.ingredients}
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <div className='input-container'>
                        <label>Directions:</label>
                        <textarea 
                            cols='25'
                            rows='4'
                            type='text'
                            name='directions'
                            value={newRecipeValues.directions}
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <div className='input-container'>
                        <label>Description:</label>
                        <textarea 
                            cols='25'
                            rows='4'
                            type='text'
                            name='description'
                            value={newRecipeValues.description}
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <button >Add Recipe</button>
                </form>
            </div>
        </UpdateStyles>
    )
}
export default AddRecipe