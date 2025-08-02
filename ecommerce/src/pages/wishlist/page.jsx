import React from 'react'
import { useWishlist } from '../../context/WishlistContext'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import WishlistProductCard from '../../components/Wishlistproductcard'
function Wishlist() {
    const {wishlist}=useWishlist()
    const navigate=useNavigate()
  return (<>
     <Navbar />
      <main className="flex flex-col items-center !pt-6 ">
        {wishlist.length > 0 ? (
          <>
            <h2 className="text-3xl "> My Wishlist</h2>
            <div className="flex gap-8">
              <div className="!pt-4 flex flex-col gap-4">
                {wishlist.length > 0 &&
                  wishlist.map((product) => (
                    <WishlistProductCard
                      key={product.id}
                      product={product}
                    ></WishlistProductCard>
                  ))}
              </div>
            </div>
          </>
        ) : (
          <div>
            <h2 className="text-3xl">Wishlist is Empty</h2>
            <p
              className="text-[] hover:cursor-pointer underline"
              onClick={() => {
                navigate("/");
              }}
            >
              Click add items to wishlist
            </p>
          </div>
        )}
      </main>
    </>
  )
}

export default Wishlist
