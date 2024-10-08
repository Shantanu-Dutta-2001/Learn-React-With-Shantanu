import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card postCard" style={{ width: "30rem" }}>
      <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20240106/pngtree-coloful-nature-beautiful-scenery-image_15576031.jpg"
        className="card-img-top"
        alt="Post Image"
      />
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            className="badge rounded-pill text-bg-primary hashTag"
            key={tag}
          >
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions.likes} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
