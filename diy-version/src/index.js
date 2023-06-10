import React from "react";
import { hydrateRoot } from "react-dom/client";

import App from "./App";

hydrateRoot(
  document.getElementById("app"),
  <App
    comments={window.__data.comments}
    description={window.__data.description}
  />
);
