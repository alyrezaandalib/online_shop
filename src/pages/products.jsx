import { ButtonDefault } from "../component/button";
import Layout from "../layout/Layout";
import * as data from "../data";
import { useCart, useCartActions } from "../context/cartProvider";
import { CheckInCart } from "../utils/checkInCart";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FaPercentage } from "react-icons/fa";

const Products = () => {
  const dispatch = useCartActions();
  const { cart } = useCart();
  const navigate = useNavigate();

  const addProductHandler = (product) => {
    const productIndex = cart.findIndex((c) => c.id === product.id);
    const productItem = { ...cart[productIndex] };
    if (product.id === productItem.id) {
      navigate("/cart");
    } else {
      toast.success(`${product.name} added to cart !`);
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };

  return (
    <Layout>
      <main className="flex justify-center ">
        <section className="rounded-md grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-3 w-[90vw] max-w-[1170px] mt-14 p-3">
          {data.products.map((product) => {
            return (
              <section
                key={product.id}
                className="rounded-md flex flex-col bg-[#ede9fe] justify-between shadow-xl cursor-pointer"
              >
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[220px] rounded-t-md"
                  />
                </div>
                <div className="backdrop-blur-xl rounded-md flex justify-between px-3 py-3">
                  <div className="flex flex-col justify-between items-start">
                    <p className="font-bold text-[18px]">{product.name}</p>
                    <div className="flex items-center justify-between w-[90px]">
                      <p
                        className={
                          product.discount ? "text-xs font-bold" : "hidden"
                        }
                      >
                        $ {product.offPrice}
                      </p>
                      <p
                        className={
                          product.discount
                            ? "text-[12px] flex items-center bg-red-500 text-white rounded-md px-[6px] py-[1px]"
                            : "hidden"
                        }
                      >
                        {product.discount} <FaPercentage />
                      </p>
                    </div>
                    <p
                      className={
                        product.discount
                          ? "text-xs line-through text-gray-600"
                          : "text-xs font-bold"
                      }
                    >
                      $ {product.price}
                    </p>
                  </div>
                  <div className="flex items-center w-fit">
                    <ButtonDefault
                      name={
                        CheckInCart(cart, product) ? "in cart" : "add to cart"
                      }
                      onClick={() => addProductHandler(product)}
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default Products;
