import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {userDetailsReducer, userRegisterReducer, userSignInReducer} from "./reducers/UserReducer.js";

const initialState = {
    userSignIn: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    },
};
const reducer = combineReducers({
    userSignIn: userSignInReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer
});

const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk), 
            //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            ),
    

);

export default store;
