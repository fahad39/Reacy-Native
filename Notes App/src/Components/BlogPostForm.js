import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, intialValues }) => {
  const [title, setTitle] = useState(intialValues.title);
  const [content, setContent] = useState(intialValues.content);
  const [buttonText, setButtonText] = useState(intialValues.buttonText);
  return (
    <View>
      <Text style={styles.label}>Enter Title : </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      ></TextInput>
      <Text style={styles.label}>Enter Content : </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(description) => setContent(description)}
      ></TextInput>
      <Button
        title={buttonText}
        onPress={() => onSubmit(title, content)}
      ></Button>
    </View>
  );
};

BlogPostForm.defaultProps = {
  intialValues: {
    title: "",
    content: "",
    buttonText: "set value",
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 2,
    borderColor: "blue",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default BlogPostForm;
