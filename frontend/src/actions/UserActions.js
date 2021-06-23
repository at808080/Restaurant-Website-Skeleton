import axios from "axios";
import { USER_SIGNIN_REQUEST,
         USER_SIGNIN_FAIL, 
         USER_SIGNIN_SUCCESS, 
         USER_SIGNIN_SIGNOUT} from "../constants/UserConstants";

export const signin = (email, password) => async(dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password }});
    try {
        const {data} = await axios.post("/api/users/signin", {email, password});
        dispatch ({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    catch (error) {
        dispatch ({type: USER_SIGNIN_FAIL,
                   payload: //if response exists return message, else return generic error message
                        error.response && error.response.data.message ? error.response.data.message : error.message, });
    }
}

export const signout = () => (dispath) => {
    localStorage.removeItem("userInfo");
    dispath({ type: USER_SIGNIN_SIGNOUT});
}