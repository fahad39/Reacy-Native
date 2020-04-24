import React, { useState } from "react";
import { Text, Button, Input } from "react-native-elements";
import { StyleSheet } from "react-native";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
      ></Input>
      <Spacer></Spacer>
      <Input
        secureTextEntry // This will hide the password
        label="Password"
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        autoCapitalize="none"
        autoCorrect={false}
      ></Input>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        ></Button>
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});

export default AuthForm;
