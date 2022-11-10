import React from "react";

import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";

import { FiUsers } from "react-icons/fi";

const Checklists = () => {
  return (
    <div>
      <div className="  flex flex-row justify-between items-center p-4 pl-5 border border-t-0 border-x-0 shadow-md ">
        <div className="flex items-center">
          <FiUsers className="text-2xl mr-3" />

          <h1 className="text-2xl">Admin Checklists </h1>
        </div>
        <div className="flex">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Checklists;
