const { createContext, useReducer } = require("react");

const DEFAULT_POSTLIST = [
  {
    postId: "1",
    postTitle: "Going To Mumbai.",
    postBody: "Hey Buddies, My Mumbai tales..",
    reactions: 2,
    userId: "user_9",
    tags: ["Vacation", "Mumbai", "Enjoying"],
  },
  {
    postId: "2",
    postTitle: "Going To Bangaluru.",
    postBody: "Hey Buddies, My Bangaluru tales..",
    reactions: 5,
    userId: "user_7",
    tags: ["Vacation", "Bangaluru", "Enjoying"],
  },
];
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  return currentPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POSTLIST
  );
  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;