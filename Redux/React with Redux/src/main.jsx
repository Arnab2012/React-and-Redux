import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux"
import counterStore from "./store/Index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Providing the store with React */}
    <Provider store={counterStore}>
      <App />
    </Provider>
  </StrictMode>
);
