import React from "react";

import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";

const newRequestRoutes = [
  {
    path: "/new-request/request-info",
    name: "Request Info",
  },
  {
    path: "/new-request/copy",
    name: "Copy",
  },
  {
    path: "/new-request/spec",
    name: "Spec",
  },
  {
    path: "/new-request/files",
    name: "Files",
  },
  {
    path: "/new-request/tasks",
    name: "Tasks",
  },
  {
    path: "/new-request/audit-log",
    name: "Audit log",
  },
  {
    path: "/new-request/comments",
    name: "Comments",
  },
];

const NewRequest = () => {
  return (
    <section className="">
      <div className="flex flex-row justify-between items-center p-4 pl-5 border border-t-0 border-x-0 shadow-md  ">
        <div className="flex items-center">
          <BsSliders className="text-2xl mr-3" />
          <h1 className="text-2xl">New Artwork Request</h1>
        </div>
        <div className="flex">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>
      <nav className="flex mt-2 py-2">
        {newRequestRoutes.map((item, index) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-navbar" : "inactive-navbar"
            }
            end
            to={item.path}
            key={index}
          >
            <div className="font-medium">{item.name}</div>
          </NavLink>
        ))}
      </nav>

      <Outlet />
    </section>
  );
};

export default NewRequest;
