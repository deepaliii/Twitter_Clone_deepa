import React from 'react';
import './App.css';
import FirstPage from './pages/FirstPage';
import Login from './pages/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
                <Route path="/homepage">
                  <HomePage/>
                </Route>
                <Route path="/login">
                  <Login/>
                </Route>
                <Route path="/">
                  <FirstPage/>
                </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
// <img src={logo} className="App-logo" alt="logo" />