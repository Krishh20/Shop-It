import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import { findProductinCart } from "../../utils/findProductinCart.js";
import findProductinWishlist from "../../utils/findProductinWishlist.js";
import { useWishlist } from "../../context/WishlistContext.jsx";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { cartState, cartDispatch } = useCart();
  const {wishlist,wishlistDispatch}=useWishlist();
  const isProductInCart = findProductinCart(cartState.cart, product.id);
   const isProductInWishlist=findProductinWishlist(wishlist,product.id)
  const onCartClick = (product) => {
    if (!isProductInCart) {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cartState.cart, product])
      ); //array to string, localstorage always expect string
      cartDispatch({
        type: "ADD TO CART",
        payload: { product },
      });
    } else {
      navigate("/cart");
    }
  };

  const OnWishlistClick=(product)=>{
    if(!isProductInWishlist){
           localStorage.setItem(
        "wishlist",
        JSON.stringify([...wishlist, product])
      );
        wishlistDispatch({
          type:"ADD TO WISHLIST",
          payload:{
            product
          }
        })
    }
    else{
      navigate("/wishlist")
    }
  }

  console.log("isproductinwishlist:",isProductInWishlist);
  return (
    <div className="card card-vertical d-flex direction-column relative shadow">
      <div className="card-image-container">
        <img className="card-image" src={product.images[0]} alt="shoes" />
      </div>
      <div className="card-details">
        <div className=" card-desi">{product.title}</div>
        <div className="card-description">
          <p className="card-price">
            {product.price}
            <span className="price-strike-through">Rs. 2499</span>
            <span className="discount">(30% OFF)</span>
          </p>
        </div>
        <div className="cta-btn">
          <button onClick={ ()=>{OnWishlistClick(product)} } className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
            <span className="material-symbols-outlined ">favorite</span>
           {
            isProductInWishlist?  " Go To Wishlist": "Add To Wishlist"
           }
          </button>
          <button
            onClick={() => {
              onCartClick(product);
            }}
            className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
          >
            <span className="material-symbols-outlined  ">
              {isProductInCart ? "shopping_cart_checkout" : "shopping_cart"}
            </span>
            {isProductInCart ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
