import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/postListStore";
import Welcome from "./Welcome";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";

function PostList() {
  // using the PostListContext
  const { postList, addPosts } = useContext(PostListContext);
  // using useState() for handling Loading State
  const [fetching, setFetching] = useState(false);

  // using useEffect to get All Posts from server
  useEffect(() => {
    // here we are setting the fetching value as true so that loading state stays
    setFetching(true);
    // console.log("Fetching Start");

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        const updatedPosts = data.posts.map((post) => ({
          // here we changing the data as for our requirements
          id: post.id,
          title: post.title,
          description: post.body,
          tags: post.tags,
          reactions: post.reactions.likes,
          userId: post.userId,
          comments: [],
        }));
        // here we are using method from PostListContext
        addPosts(updatedPosts);
        // after fetching complete then loading state will be disabled
        setFetching(false);
        // console.log("Fetching returned");
      });
    // console.log("Fetching Ended");
    return () => {
      console.log("Use Effect Cleanp");
      controller.abort();
    };
  }, []);

  return (
    <>
      {/* render based on action */}
      {fetching && <Loading />}{" "}
      {/* till fetching is true then show loading state*/}
      {!fetching && postList.length === 0 && <Welcome />}
      {/* the list we get for each item we will create each Post using the data*/}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}
export default PostList;
