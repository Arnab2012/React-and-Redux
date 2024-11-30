import { MdDelete } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

function Post({ post }) {
  return (
    <div className="card post-card" style={{ width: "35rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.description}</p>
        <button type="button" class="btn btn-primary position-relative">
        <AiFillLike />
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reactions}+
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
        {/* for tags */}
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary tags">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
export default Post;
