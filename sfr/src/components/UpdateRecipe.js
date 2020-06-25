import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {useParams, useHistory} from 'react-router-dom'

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

const UpdateRecipe = props => {
    const [recipe, setRecipe] = useState(initialState)
    const { id } = useParams()
    const {push} = useHistory()


    useEffect(() => {
        console.log(id)
        axiosWithAuth()
            .get(`api/recipes/${id}`)
            .then(res => {
                console.log('single', res)
                setRecipe(res.data.data)
            })
            .catch(err => console.log(err))
    }, [id])

    const changeHandler = e => {
        e.preventDefault()
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
            .put(`api/recipes/${id}`, recipe)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }


    return(
        <UpdateStyles>
            <div className='form-container'>
                <h2>Edit</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='input-container'>
                        <label>Title:</label>
                        <input 
                            type='text'
                            name='title'
                            value={recipe.title}
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <div className='input-container'>
                        <label>Categories:</label>
                        <input 
                            type='text'
                            name='categories'
                            value={recipe.categories}
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <div className='input-container'>
                        <label>Source:</label>
                        <input 
                            type='text'
                            name='source'
                            value={recipe.source}
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <div className='input-container'>
                        <label>Ingredients:</label>
                        <textarea 
                            cols='35'
                            rows='4'
                            type='text'
                            name='ingredients'
                            value={recipe.ingredients}
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <div className='input-container'>
                        <label>Directions:</label>
                        <textarea 
                            cols='35'
                            rows='4'
                            type='text'
                            name='directions'
                            value={recipe.directions}
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <div className='input-container'>
                        <label>Description:</label>
                        <textarea 
                            cols='35'
                            rows='4'
                            type='text'
                            name='description'
                            value={recipe.description}
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <button>Update Recipe</button>
                </form>
            </div>
        </UpdateStyles>
        
    )
}
export default UpdateRecipe