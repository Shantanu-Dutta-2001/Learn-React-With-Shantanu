import { useContext, useState } from "react";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  const [dataFetched, setDataFetched] = useState(false);

  if (!dataFetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
    setDataFetched(true);
  }

  return (
    <div>
      {postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {postList.map((item) => (
        <Post key={item.id} post={item}></Post>
      ))}
    </div>
  );
};

export default PostList;
