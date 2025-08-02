import Login from "./components/Login/index.jsx";
import { Cart } from "./pages/cart/page.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Wishlist from "./pages/wishlist/page.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/auth/login" element={<Login></Login>}></Route>
        <Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
      </Routes>
    </>
  );
}

export default App;
