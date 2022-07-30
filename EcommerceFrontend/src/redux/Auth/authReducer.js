import { Auth, Signup } from "./action";

const init = { auth: false, signup: false };

export const authReducer = (store = init, { type, payload }) => {
  switch (type) {
    case Auth:
      return { ...store, auth: payload };
    case Signup:
      return { ...store, signup: payload };
    default:
      return store;
  }
};
