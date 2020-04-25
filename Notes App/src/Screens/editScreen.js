import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { context } from "../context/BlogContext";
import BlogPostForm from "../Components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      intialValues={{
        title: blogPost.title,
        content: blogPost.content,
        buttonText: "Update Blog Post",
      }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    ></BlogPostForm>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
