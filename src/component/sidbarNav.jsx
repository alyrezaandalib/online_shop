import React from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";
import SidebarContent from "./sideBarContent";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export default function DrawerWithNavigation() {
  const [openRight, setOpenRight] = React.useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4">
        <button onClick={openDrawerRight} className="font-bold">
          <BsMenuButtonWideFill />
        </button>
      </div>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4 rounded-lg"
      >
        <div className="mb-6 flex flex-col items-center justify-between rounded-lg">
          <div className="flex w-full justify-between items-center mb-5">
            <Typography variant="h5" color="blue-gray">
              online shop
            </Typography>
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={closeDrawerRight}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <SidebarContent />
        </div>
      </Drawer>
    </React.Fragment>
  );
}
