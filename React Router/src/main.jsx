import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./routes/App.jsx";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";

// for mapping Router Provider
export const router = createBrowserRouter([
  {
    // here we are using React Layouts so that for PostList and Create Post the common parts will come
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> }, // for default load PostList Component
      // for /create-post load Create Post Component
      {
        path: "/create-post",
        element: <CreatePost />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* using Router Provider instead of App */}
    <RouterProvider router={router} />
  </StrictMode>
);
