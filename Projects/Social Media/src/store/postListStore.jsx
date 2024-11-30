import { useReducer } from "react";
import { createContext } from "react";

// creating a createContext() with default values
export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// pure Reducer function
const postListReducer = (currentPostList, action) => {
  return currentPostList;
};
const PostListProvider = ({ children }) => {
  // using useReducer() here
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    defaultPostList
  );

  // add and delete post functions

  const addPost = () => {};
  const deletePost = () => {};
  // wrapping up all the childrens inside PostList.provider
  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

const defaultPostList = [
  {
    id: "1",
    title: "Hello Friends",
    description: "Hello Guys welcome to my vlog avajhdjhgsfsjkhfk",
    reactions: 10,
    userId: "user-9",
    tags: ["Hello", "Hi"],
  },
  {
    id: "2",
    title: "Hello Friends",
    description: "Hello Guys welcome to my vlog avajhdjhgsfsjkhfk",
    reactions: 15,
    userId: "user-10",
    tags: ["Hello", "Hi"],
  },
];
export default PostListProvider;
