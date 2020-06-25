import React from 'react';
import {Route, Switch, NavLink, useHistory} from 'react-router-dom'
import './App.css';

import Register from './components/Register'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import MemberPage from './components/MemberPage'
import AddRecipe from './components/AddRecipe'
import UpdateRecipe from './components/UpdateRecipe'
import DeleteRecipe from './components/DeleteRecipe'

import NavStyles from './styles/NavStyles'

function App() {
 
  const logout = e => {
    localStorage.clear();
    window.location.href = '/login'
  }

  
  return (
    <div className="App">
      <NavStyles>
        <h1 className='site-header'>Savor</h1>
        <NavLink className='link' exact to='/member-page'>
          My Recipes
        </NavLink>
        <NavLink className='link' exact to='/add-recipe'>
          Add Recipe
        </NavLink>
        <a href='http://www.selahcreativeservices.com/savor.html' className='link'>Home</a>
        <button className='link' onClick={(e) => logout(e)}>Logout</button> 
      </NavStyles>
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
      </Switch>

    </div>
  );
}

export default App;
