import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useCart, useCartActions } from "../context/cartProvider";
import { FiTrash2 } from "react-icons/fi";
import { InputWithButton } from "../component/inputWithButton";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaPercentage } from "react-icons/fa";
import Layout from "../layout/Layout";
import { ButtonDefault } from "../component/button";
import { Button } from "@material-tailwind/react";

const CartPage = () => {
  const cartState = useCart();
  const dispatch = useCartActions();
  const { cart, total } = cartState;

  const addQuantityHandler = (productItem) => {
    dispatch({ type: "ADD_TO_CART", payload: productItem });
  };

  const minusQuantityHandler = (productItem) => {
    dispatch({ type: "MINUS_QUANTITY", payload: productItem });
  };

  if (!cart.length) {
    return (
      <Layout>
        <div className="my-16 w-[70%] h-fit font-bold mx-auto py-3 px-5 text-lg">
          <h1>cart is empty ... !!!</h1>
          <NavLink to="/products">
            <h1 className="text-[#3730a3] my-5">go to products page ? </h1>
          </NavLink>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="block my-14 lg:flex justify-around items-start w-[85%] mx-auto max-w-[1170px] rounded-lg">
        <section className="w-full lg:w-[56%] flex flex-col justify-between">
          {cart.length &&
            cart.map((item) => {
              return (
                <div
                  key={item.key}
                  className="flex mb-3 max-h-[150px] items-center rounded-lg p-2 justify-between w-full  bg-white shadow-md "
                >
                  <div className="max-w-[200px] max-h-[133px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full max-h-[133px] max-w-[190px] rounded-lg mr-5"
                    />
                  </div>
                  <div className="w-fit lg:flex lg:w-[200px] justify-between items-center ml-5">
                    <div className="font-bold">{item.name}</div>
                    <div>
                      {/* $ {item.offPrice * item.quantity} */}
                      <div className="flex items-center justify-between w-[90px]">
                        <p
                          className={
                            item.discount ? "text-sm font-bold" : "hidden"
                          }
                        >
                          $ {item.offPrice * item.quantity}
                        </p>
                        <p
                          className={
                            item.discount
                              ? "text-[12px] flex items-center bg-red-500 text-white rounded-md px-[6px] py-[1px]"
                              : "hidden"
                          }
                        >
                          {item.discount} <FaPercentage />
                        </p>
                      </div>
                      <p
                        className={
                          item.discount
                            ? "text-xs line-through text-gray-600"
                            : "text-sm font-bold"
                        }
                      >
                        $ {item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => addQuantityHandler(item)}
                      type="button"
                      className="outline-none text-[#3730a3] border border-[#3730a3] px-[5px] py-[10px] bg-white rounded-l-[5px]"
                    >
                      <AiOutlinePlus />
                    </button>
                    <button className="outline-none text-[#3730a3] border border-[#3730a3] px-[10px] py-[5px] bg-white border-l-[0px] border-r-0">
                      {item.quantity}
                    </button>
                    <button
                      onClick={() => minusQuantityHandler(item)}
                      type="button"
                      className="outline-none border border-[#3730a3] px-[5px] py-[10px] bg-white rounded-r-[5px]"
                    >
                      {item.quantity === 1 ? (
                        <span className="text-red-700">
                          <FiTrash2 />
                        </span>
                      ) : (
                        <span className="text-[#3730a3]">
                          <AiOutlineMinus />
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
        </section>
        <CartSummery total={total} cart={cart} />
      </main>
    </Layout>
  );
};

export default CartPage;

const CartSummery = ({ total, cart }) => {
  const navigate = useNavigate();
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;

  return (
    <section className="w-full flex flex-col bg-white shadow-md items-start rounded-lg p-9 justify-between lg:w-[37%]">
      <h2 className="pb-4 w-full font-bold border-b border-[#c4b5fd] text-xl">
        Payment Information
      </h2>
      <div className="w-full my-6">
        <InputWithButton />
      </div>
      <div className="w-[95%] mx-auto">
        <div className="flex justify-between w-full mb-3">
          <h2 className="text-green-800">original total price</h2>
          <span className="text-green-800">$ {originalTotalPrice}</span>
        </div>
        <div className="flex justify-between w-full pb-3  border-b border-[#c4b5fd]">
          <h2 className="text-red-500">discount</h2>
          <span className="text-red-500">$ {originalTotalPrice - total}</span>
        </div>
        <div className="flex justify-between w-full my-3 mb-5">
          <h2>final price</h2>
          <span>$ {total}</span>
        </div>
        <Button
          color="deep-purple"
          className="w-full"
          onClick={() => navigate("/sign-up?redirect=/checkout")}
        >
          Continue the payment
        </Button>
      </div>
    </section>
  );
};
