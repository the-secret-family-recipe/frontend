import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {useParams, useHistory} from 'react-router-dom'

const DeleteRecipe = () => {
    const [recipe, setRecipe] = useState({})
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
    }, [])

    const deleteRecipe = e => {
        e.preventDefault()
        axiosWithAuth()
            .delete(`api/recipes/${id}`)
            .then( res => {
                console.log(res)
                push(`/member-page`)
            })
            .catch(err => console.log(err))
         
    }

    return(
        <>
            <h2>{recipe.title}</h2>
            <p>{recipe.categories}</p>
            <p>Ingredients:{recipe.ingredients}</p>
            <p>Directions:{recipe.directions}</p>
            <button onClick={() => push(`/update-recipe/${recipe.id}`)}>Edit</button>
            <button onClick={(e) => deleteRecipe(e)}>Delete Recipe</button>
        </>
    )

}
export default DeleteRecipe