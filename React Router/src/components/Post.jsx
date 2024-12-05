import { MdDelete } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { useContext } from "react";
import { PostListContext } from "../store/postListStore";
import { useState } from "react";
import { useRef } from "react";

function Post({ post }) {
  // useRef for comments
  const postComment = useRef();
  const handleAddComment = () => {
    if (postComment.current.value.trim()) {
      addComment(post.id, postComment.current.value);
      postComment.current.value = "";
    }
  };
  // using the context from the PostListContext of the postListStore Component
  const { deletePost, addReactions, addComment } = useContext(PostListContext);

  return (
    <div className="card post-card" style={{ width: "35rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDelete onClick={() => deletePost(post.id)} />
          </span>
        </h5>
        <p className="card-text">{post.description}</p>
        <button
          type="button"
          className="btn btn-primary position-relative"
          onClick={() => addReactions(post.id)}
        >
          <AiFillLike />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reactions}+
          </span>
        </button>
        {/* for tags */}
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary tags">
            {tag}
          </span>
        ))}
      </div>
      <div className="commentSection">
        <input
          type="text"
          className="comments"
          placeholder="Enter Comments"
          ref={postComment}
        />
        <button
          className="btn btn-primary position-relative"
          onClick={handleAddComment}
        >
          Add Comment
        </button>
      </div>
      {/* adding comments here */}
      {post.comments.map((comment) => (
        <p key={comment} className="myComment">
          {comment}
        </p>
      ))}
    </div>
  );
}
export default Post;
