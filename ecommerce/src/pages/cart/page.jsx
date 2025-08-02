import Navbar from "../../components/Navbar/Navbar.jsx";
import Horizontalcardproduct from "../../components/horizontalproductcard/page";
import { useCart } from "../../context/CartContext";
import PriceDetails from "../../pricedetails/page";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const navigate = useNavigate();
  const { cartState } = useCart();
  const cart = cartState.cart;
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center !pt-6 ">
        {cart.length > 0 ? (
          <>
            <h2 className="text-3xl "> My Cart</h2>
            <div className="flex gap-8">
              <div className="!pt-4 flex flex-col gap-4">
                {cart.length > 0 &&
                  cart.map((product) => (
                    <Horizontalcardproduct
                      key={product.id}
                      product={product}
                    ></Horizontalcardproduct>
                  ))}
              </div>
              <div>
                <PriceDetails></PriceDetails>
              </div>
            </div>
          </>
        ) : (
          <div>
            <h2 className="text-3xl">Cart is Empty</h2>
            <p
              className="text-[] hover:cursor-pointer underline"
              onClick={() => {
                navigate("/");
              }}
            >
              Click to add items to cart
            </p>
          </div>
        )}
      </main>
    </>
  );
};
