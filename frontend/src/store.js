import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {userSignInReducer} from "./reducers/UserReducer.js";

const initialState = {
    userSignIn: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    },
};
const reducer = combineReducers({
    userSignIn: userSignInReducer,
});

const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk))
);

export default store;
