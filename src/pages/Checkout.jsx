import { Button } from "@material-tailwind/react";
import { useAuth } from "../context/AuthProvider";
import { useCart } from "../context/cartProvider";
import Layout from "../layout/Layout";
import { NavLink } from "react-router-dom";

const Checkout = () => {
  const userData = useAuth();
  const userCarts = useCart();
  const { cart, total } = userCarts;

  if (!cart.length) {
    return (
      <Layout>
        <div className="my-16 w-[70%] h-fit font-bold mx-auto py-3 px-5 text-lg">
          <h1>no product in cart ...!!!</h1>
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
        <section className="w-full lg:w-[56%] flex flex-col justify-between bg-white p-9 rounded-lg shadow-md mb-10">
          <div className="font-bold text-[#3730a3] text-xl">
            Checkout Detail
          </div>
          <div className="pt-5 pb-3">name : {userData.name} </div>
          <div className="pb-3">email : {userData.email} </div>
          <div className="pb-3">Phone Number : {userData.phoneNumber}</div>
        </section>
        <section className="w-full flex flex-col bg-white shadow-md items-start rounded-lg p-9 justify-between lg:w-[37%] mb-10">
          <div className="font-bold text-[#3730a3] text-xl">Product Detail</div>
          <div className="pt-5 w-full pb-2">
            {cart.map((item) => (
              <div className="pb-3 flex justify-between">
                {item.name} * {item.quantity}
                <span className="text-[#3730a3]">{item.offPrice}</span>
              </div>
            ))}
          </div>
          <div className="w-full border-t border-[#c4b5fd] pt-5 flex justify-between">
            <h2>final price </h2>
            <span className="text-[#3730a3]">$ {total}</span>
          </div>
          <Button color="deep-purple" className="mt-5 w-full">
            Continue the order
          </Button>
        </section>
      </main>
    </Layout>
  );
};

export default Checkout;
