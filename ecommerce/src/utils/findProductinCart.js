export const findProductinCart = (products, id) => {
  console.log("id:",id)
  return products.length > 0 && products.find(product => product.id === id);
};
