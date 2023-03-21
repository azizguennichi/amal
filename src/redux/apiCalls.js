import { PublicRequeste } from "../requesteMethode";
import { loginStart, loginSuccces, loginFaild, logOut } from "./userSlice";

export const Login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const result = await PublicRequeste.post("/auth/Login", user);
    dispatch(loginSuccces(result.data));
    window.location.href = "/profile";
  } catch (error) {
    dispatch(loginFaild());
  }
};

export const logOut = async (dispatch) => {
  dispatch(logOut());
};
