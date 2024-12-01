import { useReducer } from "react";
import { createContext } from "react";

// creating a createContext() with default values
export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addReactions: () => {},
  addComment: () => {},
});

// pure Reducer function
const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "ADD_POST") {
    // handling addPost
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "DELETE_POST") {
    // delete the post
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.id
    );
  } else if (action.type === "REACTION") {
    // increase the reaction of that particular post
    newPostList = currentPostList.map((post) =>
      post.id === action.payload.id
        ? { ...post, reactions: post.reactions + 1 }
        : post
    );
  } else if (action.type === "ADD_COMMENT") {
    // add comments to the post
    newPostList = currentPostList.map((post) =>
      post.id === action.payload.id
        ? { ...post, comments: [...post.comments, action.payload.comment] }
        : post
    );
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  // using useReducer() here
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    defaultPostList
  );

  // add, delete and other post functions

  const addPost = (userId, postTitle, postDescription, tags) => {
    // creating action object
    const addPostAction = {
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        description: postDescription,
        reactions: 0,
        userId: userId,
        tags: tags,
        comments: [],
      },
    };
    // now we will dispatch the action object to the reducer
    dispatchPostList(addPostAction);
  };
  const deletePost = (id) => {
    // creating action object
    const deletePostAction = {
      type: "DELETE_POST",
      payload: {
        id,
      },
    };
    // now we will dispatch the action object to the reducer
    dispatchPostList(deletePostAction);
  };
  const addReactions = (id) => {
    // creating action object
    const addReactionsAction = {
      type: "REACTION",
      payload: {
        id,
      },
    };
    // now we will dispatch the action object to the reducer
    dispatchPostList(addReactionsAction);
  };
  const addComment = (id, comment) => {
    // creating action object
    const addCommentAction = {
      type: "ADD_COMMENT",
      payload: {
        id,
        comment,
      },
    };
    // now we will dispatch the action object to the reducer
    dispatchPostList(addCommentAction);
  };
  // wrapping up all the childrens inside PostList.provider
  return (
    <PostListContext.Provider
      value={{ postList, addPost, deletePost, addReactions, addComment }}
    >
      {children}
    </PostListContext.Provider>
  );
};

const defaultPostList = [
  {
    id: "1",
    title: "Exploring Nature",
    description:
      "Had an amazing time hiking through the mountains. The view was breathtaking!",
    reactions: 20,
    userId: "user-1",
    tags: ["Travel", "Nature", "Adventure"],
    comments: [],
  },
  {
    id: "2",
    title: "Tech Talk",
    description:
      "Discussing the latest trends in AI and how it's shaping the future.",
    reactions: 35,
    userId: "user-2",
    tags: ["Technology", "AI", "Future"],
    comments: [],
  },
  {
    id: "3",
    title: "Artistic Vibes",
    description:
      "Sharing my latest painting. Inspired by the beauty of a sunset over the ocean.",
    reactions: 18,
    userId: "user-3",
    tags: ["Art", "Painting", "Creativity"],
    comments: [],
  },
];
export default PostListProvider;
