import React from "react";

import { Link, Outlet } from "react-router-dom";

import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

import AdminCard from "./AdminCard";

const teamData = [
  {
    id: 1,
    path: "/admin/users",
    heading: "Users",
    description: "Add and manage users",
    icon: <FiUsers />,
  },
  {
    id: 2,
    path: "/admin/roles",
    heading: "Roles",
    description: "Add and manage roles",
    icon: <FiUsers />,
  },
];

const workflowData = [
  {
    id: 1,
    heading: "Form Fields",
    description:
      "Customize your data capture fields used in the workflow request",
    icon: <FiUsers />,
  },

  {
    id: 2,
    heading: "Workfllow Template",
    description: "Build your owm workflow template",
    icon: <FiUsers />,
  },
  {
    id: 3,
    heading: "Views",
    description:
      "Customize what fields to be used for tracking the workflow status",
    icon: <FiUsers />,
  },
  {
    id: 4,
    heading: "Security",
    description: "Specify who should see the data",
    icon: <FiUsers />,
  },
  {
    id: 5,
    heading: "Email templates",
    description: "Customize when, what and who will receive the email",
    icon: <FiUsers />,
  },
  {
    id: 6,
    heading: "Checklists",
    description: "Customize the checklists used by the reviewers",
    icon: <FiUsers />,
  },

  {
    id: 7,
    heading: "Checklists",
    description: "Customize the checklists used by the reviewers",
    icon: <FiUsers />,
  },
  {
    id: 8,
    heading: "Checklists",
    description: "Customize the checklists used by the reviewers",
    icon: <FiUsers />,
  },
];

const masterData = [
  {
    id: 1,
    heading: "File Types",
    description: "Manage the list of file types",
    icon: <FiUsers />,
  },
  {
    id: 2,
    heading: "Departments",
    description: "Manage the list of department users",
    icon: <FiUsers />,
  },
];

const accountData = [
  {
    id: 1,
    heading: "General Settings",
    description: "Manage default settings for all users-timezone,etc.",
  },
  {
    id: 2,
    heading: "Account Details",
    description: "View account status and storage information",
  },
];

const Admin = () => {
  return (
    <section className="">
      <div className="  flex flex-row justify-between items-center p-4 pl-5 border border-t-0 border-x-0 shadow-md ">
        <div className="flex items-center">
          <BsSliders className="text-2xl mr-3" />
          <h1 className="text-2xl">Admin Dashboard</h1>
        </div>
        <div className="flex">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>

      <div className="">
        {/* Team  */}

        <div>
          <h1 className=" text-3xl ml-5 my-3 font-extrabold">Team</h1>
          <div className="flex flex-row ml-14 ">
            {teamData.map((eachTeam, index) => (
              <div className="w-1/2 ml-2" to={eachTeam.path} key={eachTeam.id}>
                <AdminCard key={eachTeam.id} eachTeam={eachTeam} />
              </div>
            ))}
          </div>
        </div>

        {/* Workflow */}

        <div className=" flex flex-col flex-1 flex-wrap ">
          <h1 className=" text-3xl ml-5 mt-3 font-extrabold">Workflow</h1>
          <div className=" flex flex-wrap p-3 gap-y-2 ">
            {workflowData.map((eachTeam, index) => (
              <div
                className="w-[44.33%] flex items-center p-3 ml-12 "
                to={eachTeam.path}
                key={eachTeam.id}
              >
                <AdminCard key={eachTeam.id} eachTeam={eachTeam} />
              </div>
            ))}
          </div>
        </div>

        {/* <div>
        <h1 className="admin-dashboard-heading">Workflow</h1>
        <div className="p-3 d-flex flex-row  flex-wrap">
          {workflowData.map((eachTeam, index) => (
            <div className="nav-l" key={eachTeam.id}>
              <AdminCard key={eachTeam.id} eachTeam={eachTeam} />
            </div>
          ))}
        </div>
      </div> */}

        {/* Master lists */}

        {/* <div>
        <h1 className="admin-dashboard-heading">Master Lists</h1>
        <div className="p-3 d-flex flex-row  flex-wrap">
          {masterData.map((eachTeam, index) => (
            <div className="nav-l" key={eachTeam.id}>
              <AdminCard key={eachTeam.id} eachTeam={eachTeam} />
            </div>
          ))}
        </div>
      </div> */}

        <div className=" flex flex-col flex-1 flex-wrap ">
          <h1 className=" text-3xl ml-5 font-extrabold">Master Lists</h1>
          <div className=" flex flex-wrap ">
            {masterData.map((eachTeam, index) => (
              <div
                className="w-[44%]  flex items-center ml-16 "
                to={eachTeam.path}
                key={eachTeam.id}
              >
                <AdminCard key={eachTeam.id} eachTeam={eachTeam} />
              </div>
            ))}
          </div>
        </div>

        {/* Account  */}

        {/* <div>
        <h1 className="admin-dashboard-heading">Account </h1>
        <div className="p-3 d-flex flex-row  flex-wrap">
          {accountData.map((eachTeam, index) => (
            <div className="nav-l" key={eachTeam.id}>
              <AdminCard key={eachTeam.id} eachTeam={eachTeam} />
            </div>
          ))}
        </div>
      </div> */}

        <div className=" flex flex-col flex-1 flex-wrap ">
          <h1 className=" text-3xl ml-5 font-extrabold">Account</h1>
          <div className=" flex flex-wrap ">
            {masterData.map((eachTeam, index) => (
              <div
                className="w-[44%]  flex items-center ml-16 "
                to={eachTeam.path}
                key={eachTeam.id}
              >
                <AdminCard key={eachTeam.id} eachTeam={eachTeam} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
