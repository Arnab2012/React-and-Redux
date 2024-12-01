import { useContext, useRef } from "react";
import { PostListContext } from "../store/postListStore";

function CreatePost() {
  // getting addPost from PostListContext
  const { addPost } = useContext(PostListContext);
  // useRef to track each input elements
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postDescriptionElement = useRef();
  const tagsElement = useRef();

  // function to handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // fetching the input values from ref
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postDescription = postDescriptionElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    // calling the addPost method of PostListContext from postListStore component
    addPost(userId, postTitle, postDescription, tags);

    // cleaning all the inputs
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postDescriptionElement.current.value = "";
    tagsElement.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter your User Id"
          ref={userIdElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today?"
          ref={postTitleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Post Description
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="description"
          placeholder="Tell me something more..."
          ref={postDescriptionElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter hashtags seperated by spaces"
          ref={tagsElement}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}
export default CreatePost;