import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
          <Header/>
            <Switch>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path='/checkout'>
                <Checkout/>
              </Route>
              <Route path='/'>
                <Home/>
              </Route>
            </Switch>
      </div>
    </Router>
  );
}

export default App;
