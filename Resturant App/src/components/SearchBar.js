import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundstyle}>
      <Feather name="search" style={styles.iconstyle}></Feather>
      <TextInput
        placeholder="Search"
        style={styles.inputstyle}
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundstyle: {
    backgroundColor: "#e6dcdc",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 13,
    marginLeft: 10,
    flexDirection: "row",
    marginBottom: 10
  },
  inputstyle: {
    flex: 1,
    fontSize: 20
  },
  iconstyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 7
  }
});

export default SearchBar;
