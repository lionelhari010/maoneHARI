import React from "react";
import { Link } from "react-router-dom";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
const MasterList = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center p-4 pl-5 border border-t-0 border-x-0 shadow-md ">
        <div className="flex items-center">
          <FiUsers className="text-2xl mr-3" />
          <nav className="">
            <ul className="flex mt-1 peer space-x-1">
              <li className="odd:after:content-[''] even:after:content-['_/'] pl-2 after:px-2 ">
                <Link
                  to="/admin"
                  className="text-slate-500 hover:no-underline hover:text-slate-900  font-bold"
                >
                  Admin
                </Link>
              </li>
              {/* <li className="after:content-['_/'] pl-2 after:px-2 ">
                <Link
                  to="/admin"
                  className="text-slate-500 hover:no-underline hover:text-slate-900  font-bold"
                >
                  Admin
                </Link>
              </li> */}
            </ul>
          </nav>
          {/* <h1 className="text-2xl">Admin Users</h1> */}
        </div>
        <div className="flex">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>
      <div className="px-5">
        <div className="flex items-baseline py-3 space-x-6">
          <h2>Master lists</h2>
          <BiPencil className="text-3xl" />
        </div>
        <div>
          <table className="border rounded-lg w-full text-left table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">List Name</th>
                <th>Numbers Of Items</th>
                <th>Last Updated By</th>
                <th>Last Updated On</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold p-4 text-black">File Types</td>
                <td>6</td>
                <td>User1</td>
                <td>12 Jul 2022</td>
                <td>
                  <Link to="/admin/master/file-types">Edit</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MasterList;
