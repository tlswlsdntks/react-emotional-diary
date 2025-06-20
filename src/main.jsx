import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={`${import.meta.env.VITE_PUBLIC_URL}`}>
    <App />
  </BrowserRouter>
);
