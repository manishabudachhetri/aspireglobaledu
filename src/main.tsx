import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import React from "react";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

createRoot(rootElement).render(<App />);

