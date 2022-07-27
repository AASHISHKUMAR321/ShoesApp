import { GETSHOES } from "./action";

const init = { shoes: null };
export const shoesReducer = (store = init, { type, payload }) => {
    switch (type) {
        case GETSHOES:
            return {...store, shoes: payload };
        default:
            return store;
    }
};