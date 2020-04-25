import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { context } from "../context/BlogContext";
import BlogPostForm from "../Components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(context);
  return (
    <BlogPostForm
      intialValues={{ buttonText: "Create Blog Post" }}
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("index"));
      }}
    ></BlogPostForm>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
