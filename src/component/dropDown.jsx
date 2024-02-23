import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const menuItems = [
  {
    name: "instagram",
    icon: <FaInstagram />,
    to: "/",
  },
  {
    name: "telegram",
    icon: <FaTelegramPlane />,
    to: "/",
  },
  {
    name: "whatsApp",
    icon: <FaWhatsapp />,
    to: "/",
  },
];

export function MenuCustomList() {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Button
          color="gray"
          variant="text"
          className="flex items-center gap-3 text-base font-normal capitalize tracking-normal hover:text-[#3730a3]"
        >
          contact Us
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="hidden w-[10rem] grid-cols-1 gap-5 overflow-visible lg:grid">
        {/* <Card
          color="gray"
          shadow={false}
          variant="gradient"
          className="col-span-3 grid h-full w-full place-items-center rounded-md"
        >
          <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
        </Card> */}
        <ul className="col-span-2 flex w-full flex-col gap-1 justify-start">
          {menuItems.map(({ name, to, icon }) => (
            <NavLink to={to} key={name}>
              <MenuItem>
                <Typography variant="h7" color="blue-gray" className="mb-1">
                  <div className="flex items-center">
                    <div className="font-bold">{icon}</div>
                    <div className="ml-3">{name}</div>
                  </div>
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                ></Typography>
              </MenuItem>
            </NavLink>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
}
