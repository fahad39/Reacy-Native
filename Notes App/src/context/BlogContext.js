import createDataContext from "./createDataContext";

import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.func) {
    case "get_blogPost":
      return action.payload;
    case "edit_blogPost":
      return state.map((blogPost) => {
        if (blogPost.id === action.payload.id) {
          return action.payload;
        } else {
          return blogPost;
        }
      });
    case "del_blogPost":
      return state.filter(
        (blogPost) => blogPost.id !== action.id_of_post_to_delte
      );
    case "add_blogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const getBlogPost = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    // response.data property will have our list of blogpost
    dispatch({ func: "get_blogPost", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });
    // dispatch({ func: "add_blogPost", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ func: "del_blogPost", id_of_post_to_delte: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ func: "edit_blogPost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []
);
