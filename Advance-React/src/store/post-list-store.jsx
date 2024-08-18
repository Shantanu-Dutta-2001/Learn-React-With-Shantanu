import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addInitialPost: () => {},
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.id
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (userId, title, body, reactions, tags) => {
    const newPost = {
      id: Date.now(),
      title: title,
      body: body,
      reactions: reactions,
      userId: userId,
      tags: tags,
    };
    dispatchPostList({
      type: "ADD_POST",
      payload: newPost,
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addInitialPost, addPost, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
