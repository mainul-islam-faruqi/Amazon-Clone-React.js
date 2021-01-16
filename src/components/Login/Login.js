import React, { useState } from 'react';
import './Login.scss';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';


const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth=> history.push('/'))
        .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();

        // here do some fancy firebase stuff
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully create new user with email and password
            console.log(auth);
            if (auth) {
                history.push('/')
                alert(" Account Successfully Created! ")
            }
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to='/'>
                <img 
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="login__container">
                <h1> Sign-In </h1>

                <form action="">
                    <h5> E-mail </h5>
                    <input type="text" value={email} onChange={e=> setEmail(e.target.value)} />

                    <h5> Password </h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="" id=""/>

                    <button className="login__signInButton" onClick={signIn} type="submit">
                        Sign In
                    </button>

                    <p>
                        By signing-in you agree to Amazon's CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button onClick={register} className="login__registerButton"> Create your Amazon Account </button>

                </form>
            </div>
        </div>
    );
};

export default Login;