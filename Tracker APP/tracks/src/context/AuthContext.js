import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";
import tracker from "../api/tracker";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } else {
    navigate("loginFlow");
  }
};

const clearErrorMessage = (dispatch) => () => {
  //console.log("clearError");
  dispatch({ type: "clear_error_message" });
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    //make api request to sign up with that email and password
    // if we sign up, modify our state,and say that we are authenticated
    // if signing in fail we probably need to reflect an error message

    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token }); // i am uing type: signin because it doesn't matter if you dignup or signin its all same
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signup",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    //try to signin
    // handle success by updating state
    //handle failure by showing error

    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signin",
      });
    }
  };
};

const signout = (dispatch) => async () => {
  //somehow sign out
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};

export const { Context, Provider } = createDataContext(
  // This function take 3 arguments authreducer , name of switch cases like add delete and third one is authenticate
  AuthReducer,
  { signin, signup, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
