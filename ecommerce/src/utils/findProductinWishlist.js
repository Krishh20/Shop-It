
export default function findProductinWishlist(products,id){
return products.length>0 && products.find((product)=>product.id===id)
}