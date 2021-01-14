import React, { useEffect } from 'react';
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
import {auth} from './components/Login/firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is >>> ", authUser);

      if (authUser) {
        // the user jsut logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user is logged out 
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="App">
          
            <Switch>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path='/checkout'>
                <Header/>
                <Checkout/>
              </Route>
              <Route path='/'>
                <Header/>
                <Home/>
              </Route>
            </Switch>
      </div>
    </Router>
  );
}

export default App;
