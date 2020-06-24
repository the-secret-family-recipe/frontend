import React from 'react';
import {Route, Switch, NavLink, useHistory} from 'react-router-dom'
import './App.css';

import Register from './components/Register'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import MemberPage from './components/MemberPage'
import AddRecipe from './components/AddRecipe'
import RecipeCard from './components/RecipeCard'
import UpdateRecipe from './components/UpdateRecipe';
import DeleteRecipe from './components/DeleteRecipe'

function App() {
 
  const logout = e => {
    localStorage.clear();
    window.location.href = '/login'
  }

  
  return (
    <div className="App">
      <nav>
        <h1 className='site-header'>Savor</h1>
        <NavLink exact to='/member-page'>
          My Recipes
        </NavLink>
        <NavLink exact to='/add-recipe'>
          Add Recipe
        </NavLink>
        <a href='http://www.selahcreativeservices.com/savor.html'>Home</a>
        <button onClick={(e) => logout(e)}>Logout</button>
    
        
      </nav>
      <Switch>
        <Route exact path='/' component={Register}>
          <Register />
        </Route>
        <Route exact path='/login' component={Login}>
          <Login />
        </Route>

        <PrivateRoute exact path='/member-page' component={MemberPage} />
        <PrivateRoute exact path='/add-recipe' component={AddRecipe} />
        <PrivateRoute exact path='/update-recipe/:id' component={UpdateRecipe} />
        <PrivateRoute exact path='/delete-recipe/:id' component={DeleteRecipe} />

        {/* <PrivateRoute exact path='/recipe/:id' component={RecipeCard}/> */}
      </Switch>

    </div>
  );
}

export default App;
