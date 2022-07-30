import axios from "axios";

export const Auth = "AUTH";
export const Signup = "SIGNUP";

export const setSignup = (data) => {
  return {
    type: Signup,
    payload: data,
  };
};

export const signUp =
  ({ user }) =>
  async (dispatch) => {
    console.log("action", user);
    await axios
      .post(`https://ak-ecommerce-app.herokuapp.com/signup`, user)
      .then(({ data }) => {
        data.errors ? alert(`${data.errors[0].msg}`) : alert("user is created");
      })
      .then(() => {
        dispatch(setSignup(true));
      });
  };

export const LoginAction =
  ({ user }) =>
  async (dispatch) => {
    await axios
      .post(`https://ak-ecommerce-app.herokuapp.com/login`, user)
      .then(({ data }) => {
        data.errors ? alert(`${data.errors[0].msg}`) : dispatch(setAuth(data));
      })
      .then(() => {
        alert("user is loged In");
      });
  };

export const setAuth = (data) => {
  return {
    type: Auth,
    payload: data,
  };
};
