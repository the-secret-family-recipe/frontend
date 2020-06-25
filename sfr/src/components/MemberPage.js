//this page will display all recipe cards
//nav bar will have links for My Recipes, Add Recipe, Home(which will link to marketing), and Logout
//There will also be a searchbar under the nav
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getRecipeData} from '../actions/recipeActions'
import {useHistory} from 'react-router-dom'

import MemberPageStyles from '../styles/MemberPageStyles'


const MemberPage = props => {

    const {push} = useHistory()

    useEffect(() => {
        props.getRecipeData()
    }, [])


    return(
        <MemberPageStyles>
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
                                <button onClick={ () => push(`/delete-recipe/${recipe.id}`)}>View</button>
                            </div>
                        )
                    })
                )}
            </div>
        </MemberPageStyles>
    )
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        error: state.error
    }
}


export default connect(mapStateToProps, {getRecipeData})(MemberPage)

