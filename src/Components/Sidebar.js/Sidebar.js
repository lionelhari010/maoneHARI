import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { RiInboxArchiveFill } from "react-icons/ri";

import { AiFillLeftCircle } from "react-icons/ai";

import { FaImage } from "react-icons/fa";

import { BiListCheck } from "react-icons/bi";

import { MdFileCopy } from "react-icons/md";
import { HiChartPie } from "react-icons/hi";

import { GiHealthNormal } from "react-icons/gi";

import { FaUserShield } from "react-icons/fa";

import { FaLock, FaMoneyBill, FaUser } from "react-icons/fa";

import { useContext } from "react";

import { AppContext } from "../../Context";

import NestedSidebar from "./NestedSidebar";

const menuItem = [
  {
    path: "/",
    name: "Inbox",
    icon: <RiInboxArchiveFill />,
  },
  {
    path: "/assets",
    name: "Assets",
    icon: <FaImage />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },

  {
    path: "/pack-copy",
    name: "Pack Copy",
    icon: <MdFileCopy />,
  },

  {
    path: "/specifications",
    name: "Specifications",
    icon: <BiListCheck />,
  },

  {
    path: "/reporting",
    name: "Reporting",
    icon: <HiChartPie />,
  },

  {
    path: "/new-request",
    name: "New Request",
    icon: <GiHealthNormal />,
  },
];

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(false);

  const [isSelected, setIsSelected] = useState(false);

  const toggle = () => setOpen(!open);

  // for Themes

  const { theme, toggleTheme } = useContext(AppContext);

  const applyStyles = theme ? "transit" : "not-transit";

  const applyStylesToProfile = open
    ? "active-container-items"
    : "inactive-container-items";

  const toggleLogos =
    theme === true
      ? "https://res.cloudinary.com/dyx9u0bif/image/upload/v1667883952/highres-ma-very-large_gce4xc.png"
      : "https://res.cloudinary.com/ddsej2ff9/image/upload/v1665393077/MicrosoftTeams-image_tejvle.png";

  const toggleTexts = theme === true ? "Light Mode" : "Dark Mode";

  return (
    // All the routings goes from here

    <div className="flex">
      <div
        className={`${
          open ? "w-80" : "w-20"
        } duration-300 h-screen p-4 pt-3 bg-skin-fill relative `}
      >
        <img
          src="https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/control.png"
          alt=""
          className={`absolute cursor-pointer -right-3 rounded-sm top-6 text-sm h-7 ${
            !open && "rotate-180"
          }`}
          onClick={toggle}
        />
        {/* Logo */}
        <div className="flex gap-x-4 items-center">
          {/* small Logo */}
          {!open && (
            <img
              src="https://res.cloudinary.com/duwkxxbeh/image/upload/v1666002585/mlogol_preview_rev_1_aj3xdi.png"
              alt="logo"
              className="w-11"
            />
          )}

          {open && <img src={`${toggleLogos}`} alt="logo" className="" />}
        </div>

        {/* Routings */}
        <ul className="pt-6">
          {menuItem.map((menu, index) => {
            if (menu.path === "/assets") {
              return (
                <NavLink
                  to={menu.path}
                  key={index}
                  // className="text-gray-300 mt-2 bg-red-600 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md "

                  className={({ isActive }) =>
                    isActive ? "active-state" : "inactive-state"
                  }
                >
                  <span className={`text-2xl ${!open && "ml-1"} `}>
                    {menu.icon}
                  </span>
                  <span
                    className={`text-xl ${!open && "hidden"}   duration-200 `}
                  >
                    {menu.name}
                  </span>
                </NavLink>
              );
            }

            return (
              <NavLink
                to={menu.path}
                key={index}
                // className="text-gray-300 mt-2 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md "

                className={({ isActive }) =>
                  isActive ? "active-state" : "inactive-state"
                }
              >
                <span className={`text-2xl ${!open && "ml-1"} `}>
                  {menu.icon}
                </span>
                <span
                  className={`text-xl ${!open && "hidden"}   duration-200 `}
                >
                  {menu.name}
                </span>
              </NavLink>
            );
          })}
        </ul>

        <hr />

        {/* Admin  Routing Link */}

        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive ? "active-state" : "inactive-state"
          }
        >
          <span className={`text-2xl ${!open && "ml-1"} `}>
            <FaUserShield />
          </span>
          <span className={`text-xl ${!open && "hidden"}   duration-200 `}>
            Admin
          </span>
        </NavLink>

        {/* Themes and profile details container*/}
        <div className={` ${applyStylesToProfile}`}>
          {/* Themes slider  */}
          <div className="flex justify-between">
            {open && <h6>{`${toggleTexts}`}</h6>}

            <div
              className="w-11 h-6 flex items-center bg-gray-300 rounded-full cursor-pointer "
              // onClick={() => setIsSelected(!isSelected)}
              onClick={toggleTheme}
            >
              <span
                className={`w-6 h-6 bg-skin-indicator rounded-full shadow-md ${applyStyles} duration-300 ease-in-out  `}
              ></span>
            </div>
          </div>

          {/* Profile details container */}

          <div className=" flex  p-2 items-center">
            <img
              className={open ? "profile-lg" : "profile-sm"}
              src="https://assets.ccbp.in/frontend/react-js/esther-howard-img.png"
              alt=""
            />
            <div className="flex ml-4 flex-col">
              <h1
                className={`text-xl text-skin-base font-bold ${
                  !open && "hidden"
                } `}
              >
                Jane Doe
              </h1>
              <span
                className={`text-xs text-skin-base ${
                  !open && "hidden"
                }   duration-200 `}
              >
                View Profile
              </span>
            </div>
          </div>
        </div>
      </div>

      <main className="min-h-full w-screen">{children}</main>
    </div>
  );
};

export default Sidebar;
