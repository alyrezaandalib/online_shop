import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { VscAccount } from "react-icons/vsc";
import { useAuth, useAuthActions } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";

const items = [
  { name: "Account", to: "" },
  { name: "Account", to: "" },
  { name: "Account", to: "" },
  { name: "Account", to: "" },
];

export default function ProfileMenu() {
  const userData = useAuth();
  const setAuth = useAuthActions();
  return (
    <Menu>
      <MenuHandler>
        <button className="text-xl p-[10px] border border-gray-400 rounded-xl hover:bg-gray-300">
          <VscAccount />
        </button>
      </MenuHandler>
      <MenuList className="text-gray-800">
        <MenuItem>
          <div className="flex flex-col justify-center">
            <p>{userData.name}</p>
            <p>{userData.phoneNumber}</p>
          </div>
        </MenuItem>
        <hr />
        <Link to="/profile">
          <MenuItem className="flex items-end justify-start my-2">
            <CiHome className="font-bold text-lg mr-1" />
            <p>Account</p>
          </MenuItem>
        </Link>
        <hr />
        <button
          className="w-full"
          onClick={() => {
            localStorage.setItem("AuthState", false);
            setAuth(false);
          }}
        >
          <MenuItem className="flex items-end justify-start my-2">
            <AiOutlineLogout className="font-bold text-lg mr-1" />
            <p>Log Out</p>
          </MenuItem>
        </button>
      </MenuList>
    </Menu>
  );
}
