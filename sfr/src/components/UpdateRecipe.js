import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {useParams, useHistory} from 'react-router-dom'

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
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Title:</label>
            <input 
                type='text'
                name='title'
                value={recipe.title}
                onChange={(e) => changeHandler(e)}
            />
            <label>Categories:</label>
            <input 
                type='text'
                name='categories'
                value={recipe.categories}
                onChange={(e) => changeHandler(e)}
            />
            <label>Source:</label>
            <input 
                type='text'
                name='source'
                value={recipe.source}
                onChange={(e) => changeHandler(e)}
            />
            <label>Ingredients:</label>
            <textarea 
                cols='25'
                rows='4'
                type='text'
                name='ingredients'
                value={recipe.ingredients}
                onChange={(e) => changeHandler(e)}
            />
            <label>Directions:</label>
            <textarea 
                cols='25'
                rows='4'
                type='text'
                name='directions'
                value={recipe.directions}
                onChange={(e) => changeHandler(e)}
            />
            <label>Description:</label>
            <textarea 
                cols='25'
                rows='4'
                type='text'
                name='description'
                value={recipe.description}
                onChange={(e) => changeHandler(e)}
            />
            <button>Update Recipe</button>
        </form>
        
    )
}
export default UpdateRecipe