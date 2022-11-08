import React, { useState } from "react";

import { useContext } from "react";

import { AppContext } from "../../../Context";

import { BsSliders } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";

import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";

import TableIcon from "@rsuite/icons/Table";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";

import MainTableGrid from "../../Tables/MainTableGrid";

const dropdownMenu = [
  {
    id: 1,
    text: " Print Proof Requests",
    icon: <TableIcon />,
  },
  {
    id: 2,
    text: "In Progress",
    icon: <TableIcon />,
  },
  {
    id: 3,
    text: "Completed",
    icon: <TableIcon />,
  },
  {
    id: 4,
    text: "New Products",
    icon: <TableIcon />,
  },
  {
    id: 5,
    text: " Shange Requests",
    icon: <TableIcon />,
  },
  {
    id: 6,
    text: "Promo Requests",
    icon: <TableIcon />,
  },
];

const Inbox = ({ children }) => {
  const [drop, setDrop] = useState(false);

  const { theme } = useContext(AppContext);

  return (
    <section className="">
      <div className="flex flex-row justify-between items-center pl-5  p-4 border border-t-0 border-x-0 shadow-md mb-2 ">
        <div className="flex justify-center items-center  ">
          <Dropdown className="mr-2" icon={<BsSliders className="h-36" />}>
            {dropdownMenu.map((item) => (
              <Dropdown.Item key={item.id} icon={item.icon}>
                {item.text}
              </Dropdown.Item>
            ))}
          </Dropdown>

          <h1 className="text-2xl">Inbox</h1>
        </div>
        <div className="flex justify-between">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>
      <MainTableGrid />
    </section>
  );
};

export default Inbox;
