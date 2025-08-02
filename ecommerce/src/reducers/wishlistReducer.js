export default function wishlistReducer(state, { type, payload }) {
  switch (type) {
    case "ADD TO WISHLIST":
      return { ...state, wishlist: [...state.wishlist, payload.product] };

    case "REMOVE FROM WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((product) => {
        return  product.id !== payload.id;
        }),
      };
    default:
      return state;
  }
}
