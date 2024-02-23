import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsCart2, BsFill1CircleFill } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { useCart } from "../context/cartProvider";
import { MenuCustomList } from "./dropDown";
import { ButtonDefault } from "./button";
import DrawerWithNavigation from "./sidbarNav";
import ProfileMenu from "./menu";
import { useAuth } from "../context/AuthProvider";
import { Button, button } from "@material-tailwind/react";

const items = [
  { name: "Home", to: "/" },
  { name: "Products", to: "/products" },
  { name: "About Us", to: "/about-us" },
];

const Navigation = () => {
  const userData = useAuth();
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <header className=" w-screen h-[3.5rem]  fixed backdrop-blur-3xl z-20 top-0 left-0 flex justify-center  ">
      <nav className="hidden lg:flex justify-between items-center w-[85%]">
        <ul className="flex justify-between items-center ">
          {items.map((item) => {
            return (
              <li key={item.to} className="mx-5 my-0 hover:text-[#3730a3]">
                <NavLink
                  to={item.to}
                  className={(naveData) =>
                    naveData.isActive ? "font-bold text-[#3730a3] " : ""
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
          <li>
            <MenuCustomList />
          </li>
        </ul>

        <div className="">
          <div className="flex items-center cursor-pointer text-xl ">
            <div className=" mx-5 my-0 hover:bg-gray-300 border border-gray-400 p-[10px] rounded-xl flex items-center relative">
              <NavLink
                to="/cart"
                className={(naveData) =>
                  naveData.isActive ? "font-bold text-[#3730a3] " : ""
                }
              >
                <BsCart2 />
              </NavLink>
              {cart.length < 1 ? (
                ""
              ) : (
                <span className="absolute right-0 top-0 w-[20px] h-[20px] bg-[#3730a3] text-white rounded-[50%] text-sm flex justify-center items-center">
                  {cart.length}
                </span>
              )}
            </div>
            <div className="flex items-center">
              {userData ? (
                <ProfileMenu />
              ) : (
                <Link to={"/log-in"}>
                  <Button
                    className="flex items-center justify-between"
                    color="deep-purple"
                    size="sm"
                  >
                    <AiOutlineLogin className="font-bold mr-1" /> log in
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="flex w-full px-10 justify-between items-center lg:hidden">
        <h2 className="font-bold hover:text-[#3730a3] text-lg">Online Shop</h2>
        <DrawerWithNavigation />
      </div>
    </header>
  );
};

export default Navigation;
