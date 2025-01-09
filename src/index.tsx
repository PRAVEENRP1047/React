import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const appElement = document.getElementById("app") as HTMLElement;
console.log("root file");
if (appElement) {
  const root = createRoot(appElement);
  root.render(<App />);
} else {
  console.error("Element with ID 'app' not found");
}
  