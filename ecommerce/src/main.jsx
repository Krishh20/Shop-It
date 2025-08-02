import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import {LoginProvider} from "./context/LoginContext.jsx"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <LoginProvider>
          <WishlistProvider>
          <App />
          </WishlistProvider>
        </LoginProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
