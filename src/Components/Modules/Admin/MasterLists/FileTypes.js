import React from "react";
import { Link } from "react-router-dom";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
const FileTypes = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center p-4 pl-5 border border-t-0 border-x-0 shadow-md ">
        <div className="flex items-center">
          <FiUsers className="text-2xl mr-3" />
          <nav className="">
            <ul className="flex mt-1 peer space-x-1">
              <li className="after:content-['_/'] pl-2 after:px-2 ">
                <Link
                  to="/admin"
                  className="text-slate-500 hover:no-underline hover:text-slate-900  font-bold"
                >
                  Admin
                </Link>
              </li>
              <li className="pl-2 after:px-2 ">
                <Link
                  to="/admin/master"
                  className="text-slate-500 hover:no-underline hover:text-slate-900  font-bold"
                >
                  Master Lists
                </Link>
              </li>
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
        <div className="flex justify-between py-5 ">
          <div className="flex space-x-6 items-baseline">
            <h2>File Types</h2>
            <BiPencil className="text-3xl" />
          </div>
          <div>
            <button className="text-white bg-violet-500 rounded-md p-3 ">
              Add File Type
            </button>
          </div>
        </div>
        <div>
          <table className="border rounded-lg w-full text-left table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">File Type</th>
                <th>Description</th>
                <th>Last Updated By</th>
                <th>Last Updated On</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold p-4 text-black">Artwork Files</td>
                <td>The artwork file that eill be approved for print</td>
                <td>User1</td>
                <td>12 Jul 2022</td>
                <td>
                  <Link to="" className="text-violet-500 hover:no-underline">
                    Edit
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="font-bold p-4 text-black">Print Proof Files</td>
                <td>
                  The artwork proof that the print vendor shares for approval
                  before printing
                </td>
                <td>User1</td>
                <td>12 Jul 2022</td>
                <td>
                  <Link to="">Edit</Link>
                </td>
              </tr>
              <tr>
                <td className="font-bold p-4 text-black">Brief</td>
                <td>Instruction and content designer to create the artwork</td>
                <td>User1</td>
                <td>12 Jul 2022</td>
                <td>
                  <Link to="">Edit</Link>
                </td>
              </tr>
              <tr>
                <td className="font-bold p-4 text-black">Dieline</td>
                <td>
                  Also called as Key Line Diagram (KLD) this is typically a CAD
                  file
                </td>
                <td>User1</td>
                <td>12 Jul 2022</td>
                <td>
                  <Link to="">Edit</Link>
                </td>
              </tr>
              <tr>
                <td className="font-bold p-4 text-black">
                  Previous Art version
                </td>
                <td>Previos version of the current artwork being created</td>
                <td>User1</td>
                <td>12 Jul 2022</td>
                <td>
                  <Link to="">Edit</Link>
                </td>
              </tr>
              <tr>
                <td className="font-bold p-4 text-black">3D Files</td>
                <td>3d rendering of the artwork in GLTF or GLB format</td>
                <td>User1</td>
                <td>12 Jul 2022</td>
                <td>
                  <Link to="">Edit</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FileTypes;
