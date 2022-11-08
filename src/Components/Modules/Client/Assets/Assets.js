import React from "react";

import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import AssetsMainPage from "./AssetsMainPage";

const Assets = () => {
  return (
    <section className="">
      <div className="flex flex-row justify-between items-center p-4 pl-5 border border-t-0 border-x-0 shadow-md ">
        <div className="flex items-center ">
          <BsSliders className="text-2xl mr-4" />
          <h1 className="text-2xl font-extrabold">Assets</h1>
        </div>
        <div className="flex justify-between">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>
      <AssetsMainPage />
    </section>
  );
};

export default Assets;
