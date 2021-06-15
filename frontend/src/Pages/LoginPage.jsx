import React from 'react';
import NavBar from '../Components/NavBar/NavBar.jsx';

function LoginPage () {
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
                <br></br>
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
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
            <h5>Don't have an account?</h5>
            <button type="submit" className="btn btn-primary">
                Register
            </button>
        </div>
        
    ) ;
}

export default LoginPage;