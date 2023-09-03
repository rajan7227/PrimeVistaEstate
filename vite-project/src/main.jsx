import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-l6.uk.auth0.com"
     clientId="9I66U6qrX3ag1roYWmMERaaKg1HRazgZ"
     authorizationParams={{
      redirect_uri: "http://localhost:5173"
     }}
     audience="http://localhost:9090"
     scope="openid profile email"
     >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
