export const CheckInCart = (cart, product) => {
  return cart.find((c) => c.id === product.id);
};

export default CheckInCart;
