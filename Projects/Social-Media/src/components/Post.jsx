const Post = ({ post }) => {
  return (
    <div className="card postCard" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {post.postTitle}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reactions}
          </span>
        </h5>
        <p className="card-text">{post.postBody}</p>
        {post.tags.map((tag) => (
          <span class="badge rounded-pill text-bg-primary">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Post;
