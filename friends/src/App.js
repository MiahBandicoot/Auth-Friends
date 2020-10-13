import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login'
import Friends from './friends';
import {Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path = '/Login' component = {Login}/>
        <PrivateRoute path = '/protected' component = {Friends}/>
      </header>
    </div>
  );
}

export default App;
