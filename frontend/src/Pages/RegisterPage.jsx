import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { register } from "../actions/UserActions";

export default function RegisterPage(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split("=")[1] : "/";

    const userRegister = useSelector((state) => state.userSignIn);
    const { userInfo } = userRegister;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        
        e.preventDefault(); //stops page from refreshing when submitting form. 
        //To use ajax request to handle form submit instead of refreshing or changing to another page


        if (password !== confirmPassword) {
            alert("Passwords do not match");
        } else {
            alert("Creating account " + firstName + " " + lastName)
            dispatch(register(false, firstName, lastName, email, password)); 
        }
                   
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
                    <h1>Register</h1>
                </div>
                <div>
                    <label htmlFor="firstName">
                        First Name
                    </label>
                    <input type="text" 
                           id="firstName    " 
                           placeholder="Enter your first name" 
                           required 
                           onChange={(e) => setFirstName(e.target.value)}>

                    </input>
                </div>
                <div>
                    <label htmlFor="lastName">
                        Last Name
                    </label>
                    <input type="text" 
                           id="lastName    " 
                           placeholder="Enter your last name" 
                           required 
                           onChange={(e) => setLastName(e.target.value)}>

                    </input>
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
                    <label htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input type="password" 
                           id="confirmPassword" 
                           placeholder="Confirm your password" 
                           required 
                           onChange={(e) => setConfirmPassword(e.target.value)}>

                    </input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Register</button>

                </div>
                <div>
                    <label></label>
                    <div>
                        Already got an account? <Link to="/signin">Sign in now</Link>
                    </div>
                </div>

            </form>
        </div>
    )
}




/*
import React from 'react';
import NavBar from '../Components/NavBar/NavBar.jsx';

function RegisterPage () {
    return (
        <div>
            <NavBar />
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Register
                </button>
            </form>
        </div>
        
    ) ;
}

export default RegisterPage;
*/