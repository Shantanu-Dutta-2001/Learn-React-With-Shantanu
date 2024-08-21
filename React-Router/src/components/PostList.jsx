import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { PostList as PostListData } from "../store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postList } = useContext(PostListData);
  const postList = useLoaderData();

  return (
    <div>
      {/* {fetching && <LoadingSpinner></LoadingSpinner>} */}
      {postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {postList.map((item) => (
        <Post key={item.id} post={item}></Post>
      ))}
    </div>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
