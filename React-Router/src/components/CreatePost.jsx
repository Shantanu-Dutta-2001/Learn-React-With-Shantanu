import { useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useContext } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);
  // const navigate = useNavigate();
  // const userIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    // const userId = userIdElement.current.value;
    // const title = postTitleElement.current.value;
    // const body = postBodyElement.current.value;
    // const tags = tagsElement.current.value.split(" ");
    // const reactions = { likes: Number((Math.random() * 100).toFixed(0)) };
    // userIdElement.current.value = "";
    // postTitleElement.current.value = "";
    // postBodyElement.current.value = "";
    // tagsElement.current.value = "";
  };
  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your User-Id Here
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="postTitle"
          placeholder="Post Title..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postBody" className="form-label">
          Post Body
        </label>
        <textarea
          type="text"
          rows={5}
          name="body"
          className="form-control"
          id="postBody"
          placeholder="Post Body..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your Hashtags Here
        </label>
        <input
          type="text"
          ref="tags"
          className="form-control"
          id="tags"
          placeholder="Post Body..."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  postData.reactions = { likes: Number((Math.random() * 100).toFixed(0)) };
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      addPost(post);
    });
  return redirect("/");
}
export default CreatePost;
