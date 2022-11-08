import React from "react";

import { FaBars } from "react-icons/fa";

const dataSource = [
  {
    id: 1,
    actions: "Update File",
    filename: "12_humans.pdf",
    version: "0.1",
    file_type: "Artwork",
    added_by: "Peter Smith",
    added_on: "20 Jun 2022",
  },
  {
    id: 2,
    actions: "Update File",
    filename: "brief_documented.docx",
    version: "0.2",
    file_type: "Brief",
    added_by: "Tomr Satter",
    added_on: "20 Jun 2022",
  },
  {
    id: 3,
    actions: "Update File",
    filename: "label_deline.docx",
    version: "0.1",
    file_type: "Deline",
    added_by: "Peter Smith",
    added_on: "20 Jun 2022",
  },
];

const Files = () => {
  return (
    <div className="p-1 pt-3">
      <table className="w-full">
        <thead className="bg-gray-50  border-b-2 border">
          <tr>
            <th className="p-3 text-md font-bold tracking-wide text-left">
              Actions
            </th>
            <th className="p-3 text-md font-bold tracking-wide text-left">
              File Name
            </th>
            <th className="p-3 text-md font-bold tracking-wide text-left">
              Version
            </th>
            <th className="p-3 text-md font-bold tracking-wide text-left">
              File Type
            </th>
            <th className="p-3 text-md font-bold tracking-wide text-left">
              Added By
            </th>
            <th className="p-3 text-md font-bold tracking-wide text-left">
              Added On
            </th>
          </tr>
        </thead>
        <tbody>
          {dataSource.map((each) => {
            return (
              <tr className="bg-gray-50 border-b-2 border" key={each.id}>
                <td className="p-3 text-sm font-semibold tracking-wide text-left flex items-center">
                  <span className="bg-amber-400 p-2 rounded-lg">
                    {each.actions}
                  </span>

                  <FaBars className="ml-4 text-xl" />
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  {each.filename}
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  {each.version}
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  {each.file_type}
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  {each.added_by}
                </td>
                <td className="p-3 text-sm font-semibold tracking-wide text-left">
                  {each.added_on}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-center items-center p-3">
        <button className="bg-gray-700 p-2 rounded-lg tracking-wide px-5 mr-2 text-white font-medium ">
          submit
        </button>
        <button className="bg-gray-700 p-2 rounded-lg tracking-wide px-5 mr-2 text-white font-medium">
          save
        </button>
      </div>
    </div>
  );
};

export default Files;
