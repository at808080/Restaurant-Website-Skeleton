import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from "../../actions/UserActions";

function NavBar() {

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const dispatch = useDispatch();

    const signoutHandler = () => {
      dispatch(signout());
    }
    return (
    <header className="row">
        <div>
          <Link to="/">eBistrot</Link>
        </div>
        <div>
          <Link to="/Menu">Menu</Link>
        </div>
        <div>
          <Link to="/Specials">Specials</Link>
        </div>
        <div>
        {
          userInfo  ? (
            <Link to="#">{userInfo.name} name</Link>
           
          ) : (
            <Link to="/signin">Sign In</Link>
          )
        }
        </div>
        <div>
        {
          userInfo  ? (
            <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>

          ) : (
            <Link to="#">.</Link>
          )
        }
        </div>
    </header>
    );
  }

export default NavBar;