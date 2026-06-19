import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { initGoogleAnalytics, initLandingClickTracking, initScrollDepthTracking, initSectionViewTracking } from "./analytics.js";
import "./styles.css";

initGoogleAnalytics();
initLandingClickTracking();
initSectionViewTracking();
initScrollDepthTracking();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
