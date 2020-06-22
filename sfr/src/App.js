import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom'
import './App.css';

import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <nav>
        <h1 className='site-header'>Savor</h1>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Register />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
