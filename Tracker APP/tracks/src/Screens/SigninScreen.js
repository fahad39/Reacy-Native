import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context } from "../context/AuthContext";
import AuthForm from "../Components/AuthForm";
import NavLink from "../Components/NavLink";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);
  return (
    <View style={styles.Container}>
      <NavigationEvents onWillBlur={clearErrorMessage}></NavigationEvents>
      <AuthForm
        headerText="Sign in to your Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign in"
        onSubmit={signin}
      ></AuthForm>
      <NavLink
        text="Don't have an account? Sign up"
        routeName="Signup"
      ></NavLink>
    </View>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
});

export default SigninScreen;
