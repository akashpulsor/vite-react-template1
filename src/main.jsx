import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { initGoogleAnalytics, initLandingClickTracking, initSectionViewTracking } from "./analytics.js";
import "./styles.css";

initGoogleAnalytics();
initLandingClickTracking();
initSectionViewTracking();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
