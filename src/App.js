import React, { useEffect } from 'react';
import './App.scss';
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
import Payment from './components/Payment/Payment';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders/Orders';

const promise = loadStripe(
  "pk_test_51HZuu8L2Eb4HEaVe78h9UUQf1DIYLK6AxtrpG9yj9gFcIrMf6X1tHG40fkmBc5dgeiVl8tLqDE5MhbuiHcITbkxm00sYEdBj80"
)

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
        console.log(authUser)
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
              <Route path='/payment'>
                <Header/>
                <Elements stripe={promise}> 
                  <Payment/>
                </Elements>
              </Route>
              <Route path='/orders'>
                <Header/>
                <Orders/>
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
