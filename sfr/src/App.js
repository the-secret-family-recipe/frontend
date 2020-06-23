import React from 'react';
import {Route, Switch, NavLink, useHistory} from 'react-router-dom'
import './App.css';

import Register from './components/Register'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import MemberPage from './components/MemberPage'
import AddRecipe from './components/AddRecipe'
import Recipe from './components/Recipe'

function App() {



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

        <PrivateRoute exact path='/recipes/:id' component={Recipe}/>
      </Switch>

    </div>
  );
}

export default App;
