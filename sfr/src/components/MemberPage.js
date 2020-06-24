//this page will display all recipe cards
//nav bar will have links for My Recipes, Add Recipe, Home(which will link to marketing), and Logout
//There will also be a searchbar under the nav
import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getRecipeData} from '../actions/recipeActions'
import {useParams, useHistory} from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
// import RecipeCard from '../components/RecipeCard'


const MemberPage = props => {
    const [recipe, setRecipe] = useState(null)
    const params = useParams()
    const {push} = useHistory()

    // const fetchRecipe = (id) => {
    //     axiosWithAuth()
    //         .get(`api/recipies/${id}`)
    //         .then(res => setRecipe(res.data.data))
    //         .catch(err => console.log(err))
    // }

    

    useEffect(() => {
        props.getRecipeData()
    }, [])

    // useEffect(() => {
    //     fetchRecipe(params.id)
    // }, [params.id])

    // const deleteRecipe = (e, id) => {
    //     e.preventDefault()
    //     axiosWithAuth()
    //         .delete(`api/recipies/${id}`)
    //         .then(res => {
    //             push(`/member-page`)
    //         })
    //         .catch(err => console.log(err))
    //         .finally(() => {
    //             window.location.reload()
    //         })
    // }

    // const deleteRecipe = (e, recipe) => {
    //     e.preventDefault()
    //     axiosWithAuth()
    //         .delete(`api/recipies/${recipe.id}`)
    //         .then(res => {
    //             push(`/member-page`)
    //         })
    //         .catch(err => console.log(err))
    //         .finally(() => {
    //             window.location.reload()
    //         })
    // }

    return(
        <>
            <h2>Welcome  Member!</h2>
            <div className= 'recipes-container'>
                {props.error ? ( 
                    <div className='error'>{props.error}</div>
                ) : (
                    props.recipes.map((recipe, index) => {
                        return (
                            <div key={index} className='card'>
                                <h3>{recipe.title}</h3>
                                <p>{recipe.categories}</p>
                                {/* <button onClick={() => push(`update-recipe/${recipe.id}`)}>Edit</button> */}
                                <button onClick={ () => push(`/delete-recipe/${recipe.id}`)}>View</button>
                            </div>
                        )
                    })
                )}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        error: state.error
    }
}


export default connect(mapStateToProps, {getRecipeData})(MemberPage)

