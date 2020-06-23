//this page will display all recipe cards
//nav bar will have links for My Recipes, Add Recipe, Home(which will link to marketing), and Logout
//There will also be a searchbar under the nav
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getRecipeData} from '../actions/recipeActions'


const MemberPage = props => {


    useEffect(() => {
        props.getRecipeData()
    }, [])

    return(
        <>
            <h2>Welcome  Member!</h2>
            <div className= 'recipes-container'>
                {props.error ? ( 
                    <div className='error'>{props.error}</div>
                ) : (
                    props.recipes.map((recipe, index) => 
                        <div key={index}className='recipe-card'>
                            <p>{recipe.title}</p>

                        </div>
                    )
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

