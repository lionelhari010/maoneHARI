import React, { useState } from "react";

import ReactDataGrid from "@inovua/reactdatagrid-enterprise";
import "@inovua/reactdatagrid-enterprise/index.css";
import CheckBox from "@inovua/reactdatagrid-community/packages/CheckBox";

const columns = [
  { name: "Name", defaultFlex: 1, header: " NAME" },
  { name: "Mail", defaultFlex: 1, header: " MAIL" },
  { name: "Department", defaultFlex: 1, header: " DEPARTMENT" },

  {
    name: "Security",
    defaultFlex: 1,
    header: "SECURITY",
  },
];

const dataSource = [
  {
    Name: "John",
    Mail: "karomi@gmail.com",
    Department: "Marketing",
    id: 0,

    Security: "Normal",
  },
  {
    Name: "Mary",
    Mail: "bharath@gmail.com",
    Department: "Regulatory",
    id: 1,
    Security: "Normal",
  },
  {
    Name: "Mary",
    Mail: "john@gmail.com",
    Department: "Legal",
    id: 2,
    Security: "Normal",
  },
  {
    Name: "Mary",
    Mail: "abc@gmail.com",
    Department: "Marketing",
    id: 3,
    Security: "Normal",
  },
  {
    Name: "Mary",
    Mail: "xyz@gmail.com",
    Department: "Product Development",
    id: 4,
    Security: "Normal",
  },
];

const gridStyle = { minHeight: 550 };

const filterValue = [
  { name: "Name", operator: "startsWith", type: "string", value: "" },
  { name: "Mail", operator: "startsWith", type: "string", value: "" },
  { name: "Department", operator: "startsWith", type: "string", value: "" },
  { name: "Security", operator: "startsWith", type: "string", value: "" },
];

const UserTableGrid = () => {
  const [checkboxOnlyRowSelect, setCheckboxOnlyRowSelect] = useState(true);
  const [checkboxColumn, setCheckboxColumn] = useState(true);
  const [enableColumnFilterContextMenu, setEnableColumnFilterContextMenu] =
    useState(true);

  return (
    <div>
      <ReactDataGrid
        idProperty="id"
        columns={columns}
        style={gridStyle}
        dataSource={dataSource}
        key={"grid-" + checkboxOnlyRowSelect}
        checkboxColumn={checkboxColumn}
        checkboxOnlyRowSelect={checkboxOnlyRowSelect}
        rowHeight={50}
        // defaultFilterValue={filterValue}
        // pagination
        // enableColumnFilterContextMenu={enableColumnFilterContextMenu}
      />
    </div>
  );
};

export default UserTableGrid;
