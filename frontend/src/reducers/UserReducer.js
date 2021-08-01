import { USER_SIGNIN_FAIL, 
         USER_SIGNIN_REQUEST, 
         USER_SIGNIN_SIGNOUT, 
         USER_SIGNIN_SUCCESS,
         USER_REGISTER_REQUEST,
         USER_REGISTER_FAIL, 
         USER_REGISTER_SUCCESS,
         USER_DETAILS_REQUEST,
         USER_DETAILS_SUCCESS,
         USER_DETAILS_FAIL, } from "../constants/UserConstants";

export const userRegisterReducer = (state = {},action) => {
    switch (action.type) {
       case USER_REGISTER_REQUEST:
           return {loading : true};
       case USER_REGISTER_SUCCESS:
           return {loading: false, userInfo: action.payload };
       case USER_REGISTER_FAIL:
           return {loading: false, error: action.payload};
       default:
           return state;
    }
}

export const userSignInReducer = (state = {},action) => {
 switch (action.type) {
    case USER_SIGNIN_REQUEST:
        return {loading : true};
    case USER_SIGNIN_SUCCESS:
        return {loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
        return {loading: false, error: action.payload};
    case USER_SIGNIN_SIGNOUT:
        return {};
    default:
        return state;
    }
};

export const userDetailsReducer = (state = {loading: true}, action) => {
    switch(action.type) {
        case USER_DETAILS_REQUEST: 
            return { loading: true};
        case USER_DETAILS_SUCCESS:
            return { loading: false, user: action.payload};
        case USER_DETAILS_FAIL:
            return { loading: false, error: action.payload};
        default:
            return state;
    }
}