import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <div>
      {postList.map((item) => (
        <Post key={item.postId} post={item}></Post>
      ))}
    </div>
  );
};

export default PostList;
