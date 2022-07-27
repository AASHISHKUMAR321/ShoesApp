import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "./Auth/authReducer";
import { shoesReducer } from "./Shoes/shoesReducer";

const rootreduxer = combineReducers({
    auth: authReducer,
    shoes: shoesReducer,
});

const midlleware = (store) => (next) => (action) => {
    if (typeof action == "function") {
        return action(store.dispatch);
    }
    next(action);
};

export const Store = legacy_createStore(
    rootreduxer,
    applyMiddleware(midlleware)
);