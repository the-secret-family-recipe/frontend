import {GET_RECIPES, UPDATE_RECIPES, SET_ERROR} from '../actions/recipeActions';

export const initialState = {
    recipes: [],
    isFetchingData: false,
    isAdding: false,
    isEditing: false,
    isDeleting: false,
    error: ''
}

export const recipeReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_RECIPES:
            return {
                ...state,
                isFetchingData: true,
                recipes:[]
            };
        case UPDATE_RECIPES:
            return{
                ...state,
                recipes:action.payload,
            }
        default:
            return state
    }
}