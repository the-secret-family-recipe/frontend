import {axiosWithAuth} from '../utils/axiosWithAuth';

export const GET_RECIPES = 'GET_RECIPES'
export const UPDATE_RECIPES = 'UPDATE_RECIPES'
export const SET_ERROR = 'SET_ERROR'


export const getRecipeData = () => dispatch => {
    dispatch({type: GET_RECIPES});
    axiosWithAuth()
        .get('api/recipes')
        .then(res => {
            console.log(res);
            dispatch({type: UPDATE_RECIPES, payload: res.data.data});
        })
        .catch(err => {
            console.error('error fetching data from api:', err)
            dispatch({type: SET_ERROR, payload: 'error fetching data from api'});
        })
}


