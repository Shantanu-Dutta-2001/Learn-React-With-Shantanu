import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.postId !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};
const DEFAULT_POSTLIST = [
  {
    postId: 1,
    postTitle: "Going To Mumbai.",
    postBody: "Hey Buddies, My Mumbai tales..",
    reactions: 2,
    userId: "user_9",
    tags: ["Vacation", "Mumbai", "Enjoying"],
  },
  {
    postId: 2,
    postTitle: "Going To Bangaluru.",
    postBody: "Hey Buddies, My Bangaluru tales..",
    reactions: 5,
    userId: "user_7",
    tags: ["Vacation", "Bangaluru", "Enjoying"],
  },
];

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POSTLIST
  );
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    const newPost = {
      postId: Date.now(),
      postTitle: postTitle,
      postBody: postBody,
      reactions: reactions,
      userId: userId,
      tags: tags,
    };
    dispatchPostList({
      type: "ADD_POST",
      payload: newPost,
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
