import axios from "axios";

export const USER_CREATED = "USER_CREATED";

function signUpSuccess() {
  return { type: USER_CREATED };
}

export function signUp(email, password) {
  return async function(dispatch, getState) {
    const response = await axios.post("http://localhost:4000/user", {
      email: email,
      password: password
    });

    if (response.status === 201) {
      dispatch(signUpSuccess());
    }
  };
}

export function login(email, password) {
  return async function(dispatch, getState) {
    console.log(email, password);
    const response = await axios.post("http://localhost:4000/login", {
      email,
      password
    });

    console.log(response);

    dispatch({ type: "TESTING" });
  };
}
