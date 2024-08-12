import { AiFillDelete } from "react-icons/ai";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card postCard" style={{ width: "30rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {post.postTitle}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.postId)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.postBody}</p>
        {post.tags.map((tag) => (
          <span
            className="badge rounded-pill text-bg-primary hashTag"
            key={tag}
          >
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
