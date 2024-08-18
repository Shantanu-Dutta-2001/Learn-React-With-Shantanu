import { useContext } from "react";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);

  const handleGetPostsClick = () => {
    console.log("Get post button is clicked");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
  };
  return (
    <div>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostClick={handleGetPostsClick}></WelcomeMessage>
      )}
      {postList.map((item) => (
        <Post key={item.id} post={item}></Post>
      ))}
    </div>
  );
};

export default PostList;
