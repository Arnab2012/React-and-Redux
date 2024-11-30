import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/postListStore";

function PostList() {
  // using the PostListContext
  const { postList } = useContext(PostListContext);
  return (
    <>
      {/* the list we get for each item we will create each Post using the data*/}
      {postList.map((post) => (
        <Post key={post.id} post={post}/>
      ))}
    </>
  );
}
export default PostList;
