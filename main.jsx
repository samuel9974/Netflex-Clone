import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./src/App.jsx";

/**
 * Application entry point: mounts the React app with StrictMode and client-side routing.
 * Assumes a DOM element with id "root" exists.
 * @returns {void} - No return value; throws if the root element is missing.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
