import React from "react";

import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";

import { FiUsers } from "react-icons/fi";

import ReactDataGrid from "@inovua/reactdatagrid-enterprise";
import "@inovua/reactdatagrid-enterprise/index.css";
import { MdOutlineDoubleArrow, MdOutlineModeEditOutline } from "react-icons/md";

import { BiCheck } from "react-icons/bi";

const sourceData = [
  {
    fieldName: "Request Number ",
    fieldType: "Numeric",
    mandatory: "",
    visible: "",
    id: 1,
  },
  {
    fieldName: "Initiated By",
    fieldType: "Text",
    mandatory: "",
    visible: "",
    id: 2,
  },
  {
    fieldName: "Initiated On",
    fieldType: "Date",
    mandatory: "",
    visible: "",
    id: 3,
  },
  {
    fieldName: "Workflow Name",
    fieldType: "Text",
    mandatory: "",
    visible: "",
    id: 4,
  },
  {
    fieldName: "Category name",
    fieldType: "Text",
    mandatory: "",
    visible: "",
    id: 5,
  },
  {
    fieldName: "Brand name",
    fieldType: "Text",
    mandatory: "",
    visible: "",
    id: 6,
  },
  {
    fieldName: "Product  name",
    fieldType: "Text",
    mandatory: "",
    visible: "",
    id: 7,
  },

  {
    fieldName: "Product Code",
    fieldType: "Text",
    mandatory: "",
    visible: "",
    id: 8,
  },

  {
    fieldName: "Pack Size",
    fieldType: "Text",
    mandatory: "",
    visible: "",
    id: 9,
  },
];

const gridStyle = { minHeight: 550 };

const columns = [
  { name: "fieldName", minWidth: 50, header: "Field Forms", defaultFlex: 1 },
  { name: "fieldType", minWidth: 50, header: "Field Type ", defaultFlex: 1 },
  {
    fieldName: "mandatory",
    minWidth: 50,
    header: "Mandatory",
    defaultFlex: 1,
    render: () => {
      return <BiCheck />;
    },
  },
  {
    fieldName: "visible",
    minWidth: 50,
    header: "Visible",
    defaultFlex: 1,
    render: () => {
      return <BiCheck />;
    },
  },
  {
    fieldName: "editMode",
    render: () => (
      <button style={{ backgroundColor: "none" }} className="edit-button">
        Edit
      </button>
    ),
  },
];

const FormFields = () => {
  return (
    <div>
      <div className="  flex flex-row justify-between items-center p-4 pl-5 border border-t-0 border-x-0 shadow-md ">
        <div className="flex items-center">
          <FiUsers className="text-2xl mr-3" />

          <h1 className="text-2xl">Admin Form Fields </h1>
        </div>
        <div className="flex">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>

      <div>
        <ReactDataGrid
          idProperty="id"
          style={gridStyle}
          rowHeight={50}
          //   maxRowHeight={400}
          rowReorderColumn
          columns={columns}
          dataSource={sourceData}
          //   pagination
        />
      </div>
    </div>
  );
};

export default FormFields;
