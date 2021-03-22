import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { signin, register } from '../actions/userActions';

function SigninScreen (props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const userSignin = useSelector(state => state.userSignin || {});
    const { loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split("=")[1]: '/';
    
    function demoCreds(){
        setEmail('demo@demo.com');
        setPassword('demo');
    }

    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
        }
        return () => {
          //
        };
      }, [userInfo]);


    const submitHandler = (e) => {
        dispatch(signin(email, password)); 
        e.preventDefault();
    }

    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Sign-In</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
                </li>
                <li>
                    <button type="submit" className="button primary"> Sign In</button>
                </li>
                <li>
                    <button type="submit" className="button primary" onClick={() => demoCreds()}> Demo </button>
                </li>
                <li>
                    First time visiting?
                </li>
                <li>
                    <Link to={redirect === "/" ? "register" : "registers?redirect=" + redirect} className="button text-center secondary">Create your account!</Link>
                </li>
            </ul>
        </form>
    </div>
}

export default SigninScreen;
