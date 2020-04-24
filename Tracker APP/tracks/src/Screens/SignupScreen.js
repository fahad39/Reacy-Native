import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../Components/AuthForm";
import NavLink from "../Components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.Container}>
      <NavigationEvents onWillBlur={clearErrorMessage}></NavigationEvents>
      <AuthForm
        headerText="Sign up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign up"
        onSubmit={signup}
      ></AuthForm>
      <NavLink
        text="Already have an account? Sign in"
        routeName="Signin"
      ></NavLink>
    </View>
  );
};

SignupScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
});

export default SignupScreen;
