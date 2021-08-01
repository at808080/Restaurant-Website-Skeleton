import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { detailsUser } from "../actions/UserActions";

export default function ProfilePage() {

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const dispatch = useDispatch();

    
    
    useEffect(() => {
        dispatch(detailsUser(userInfo._id));
    }, [dispatch, userInfo._id]);

    const submitHandler = (e) => {
        e.preventDefault();
        //dispatch update profile
    }

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>User Profile</h1>
                    <h2>{userInfo.firstname} {userInfo.lastname}</h2>
                </div>

                
                {
                    /*
                    loading ? <LoadingBox></LoadingBox> : 
                        error ? <MessageBox variant="danger">{error}</MessageBox> : 
                            <> <div>
                                <label htmlFor="name">Name</label>
                                <input id="name" type="text" placeholder="Enter name" value={user.name}></input>
                            </div>
                            <div>
                                <label />
                                <button className="primary" type="submit">
                                    Update Details
                                </button>
                            </div>
                            </>
                    */
                }
            </form>
        </div>
    )
}