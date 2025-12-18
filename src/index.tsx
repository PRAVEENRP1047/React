import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const appElement = document.getElementById("app") as HTMLElement;
if (appElement) {
  const root = createRoot(appElement);
  root.render(
    // <StrictMode>
      <App />
    // </StrictMode>
  );
} else {
  console.error("Element with ID 'app' not found");
}
