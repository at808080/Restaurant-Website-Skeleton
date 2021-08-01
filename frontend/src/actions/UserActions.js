import Axios from "axios";
import { USER_SIGNIN_REQUEST,
         USER_SIGNIN_FAIL, 
         USER_SIGNIN_SUCCESS, 
         USER_SIGNIN_SIGNOUT,
         USER_REGISTER_REQUEST,
         USER_REGISTER_FAIL, 
         USER_REGISTER_SUCCESS,
         USER_DETAILS_REQUEST,
         USER_DETAILS_FAIL,
         USER_DETAILS_SUCCESS, } from "../constants/UserConstants";

export const register = (isAdmin, firstname, lastname, email, password) => async(dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { isAdmin, firstname, lastname, email, password }});
    try {
        const {data} = await Axios.post("/api/users/register", {isAdmin, firstname, lastname, email, password});
        dispatch ({type: USER_REGISTER_SUCCESS, payload: data});
        dispatch ({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    catch (error) {
        dispatch ({type: USER_REGISTER_FAIL,
                   payload: //if response exists return message, else return generic error message
                        error.response && error.response.data.message ? error.response.data.message : error.message, });
    }
}


export const signin = (email, password) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
    try {
        const {data} = await Axios.post('/api/users/signin', {email, password});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};



export const signout = () => (dispath) => {
    localStorage.removeItem("userInfo");
    dispath({ type: USER_SIGNIN_SIGNOUT});
}

export const detailsUser = (userID) => async (dispatch, getState) => {
    dispatch({ 
        type: USER_DETAILS_REQUEST, payload: userID 
    });

    const { userSignIn: {userInfo }} = getState();
    try {
        const { data } = await Axios.get('/api/users/${userId}', {
            headers: { Authorization: 'Bearer ${userInfo.token}' }
        });
        dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    } catch(error) {
        const message = 
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message ;
        dispatch({ type: USER_DETAILS_FAIL, payload: message})
    }
}