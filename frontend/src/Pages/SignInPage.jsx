import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { signin } from "../actions/UserActions";
import { useSelector } from "react-redux";

export default function SignInPage(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split("=")[1] : "/";

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault(); //stops page from refreshing when submitting form. 
                            //To use ajax request to handle form submit instead of refreshing or changing to another page
        dispatch(signin(email, password));            
    }

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input type="email" 
                           id="email" 
                           placeholder="Enter your email address" 
                           required 
                           onChange={(e) => setEmail(e.target.value)}>

                    </input>
                </div>
                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" 
                           id="password" 
                           placeholder="Enter your password" 
                           required 
                           onChange={(e) => setPassword(e.target.value)}>

                    </input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Sign In</button>

                </div>
                <div>
                    <label></label>
                    <div>
                        New User? <Link to="/register">Create account now</Link>
                    </div>
                </div>

            </form>
        </div>
    )
}