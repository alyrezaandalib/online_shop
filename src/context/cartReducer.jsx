import { toast } from "react-toastify";

const addProductItem = (state, payload) => {
  // console.log(action);
  // console.log(state);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === payload.id
  );
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...payload, quantity: 1 });
    // return {...state , cart : [...state.cart , {...payload.qty : 1}]}
  } else {
    const updatedItem = { ...updatedCart[updatedItemIndex] };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return {
    ...state,
    cart: updatedCart,
    total: state.total + payload.offPrice,
  };
};
const decrementProductItem = (state, payload) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === payload.id
  );
  const updatedItem = { ...updatedCart[updatedItemIndex] };
  if (updatedItem.quantity === 1) {
    toast.warning(`${payload.name} remove from cart`);
    const filteredCarts = updatedCart.filter((item) => item.id !== payload.id);
    return {
      ...state,
      cart: filteredCarts,
      total: state.total - payload.offPrice,
    };
  } else {
    updatedItem.quantity--;
    updatedCart[updatedItemIndex] = updatedItem;
    return {
      ...state,
      cart: updatedCart,
      total: state.total - payload.offPrice,
    };
  }
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return addProductItem(state, action.payload);
    }
    case "MINUS_QUANTITY": {
      return decrementProductItem(state, action.payload);
    }
    default:
      return state;
  }
};

export default cartReducer;
