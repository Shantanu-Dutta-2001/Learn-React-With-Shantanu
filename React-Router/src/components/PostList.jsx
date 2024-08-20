import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { PostList as PostListData } from "../store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <div>
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {postList.map((item) => (
        <Post key={item.id} post={item}></Post>
      ))}
    </div>
  );
};

export default PostList;
