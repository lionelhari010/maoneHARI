import React, { useState, useCallback } from "react";

import moment from "moment";

import ReactDataGrid from "@inovua/reactdatagrid-enterprise";
import "@inovua/reactdatagrid-enterprise/index.css";

import "@inovua/reactdatagrid-enterprise/index.css";
import "@inovua/reactdatagrid-enterprise/theme/default-light.css";

import "@inovua/reactdatagrid-enterprise/index.css";

window.moment = moment;
const DATASET_URL = "https://demos.reactdatagrid.io/api/v1/contacts";

const defaultFilterValue = [
  { name: "firstName", type: "string", operator: "contains", value: "" },
  { name: "lastName", type: "string", operator: "contains", value: "" },
  { name: "email", type: "string", operator: "contains", value: "" },
];

const columns = [
  {
    name: "id",
    header: "Id",
    defaultVisible: false,
    type: "number",
    defaultWidth: 80,
  },

  {
    defaultFlex: 1,
    render: ({ index }) => {
      if (index === undefined) {
        return (
          <div className="flex items-center ">
            <img
              className="h-10 rounded-lg"
              src="https://assets.ccbp.in/frontend/react-js/esther-howard-img.png"
              alt=""
            />
            <span className="ml-2">New Art Work Request</span>
          </div>
        );
      }
    },
  },

  { name: "firstName", header: "Request Type", defaultFlex: 1 },
  { name: "lastName", header: "Product Name", defaultFlex: 1 },
  { name: "email", header: "Company Type", defaultFlex: 1 },
];

const gridStyle = { minHeight: 680 };

const loadData = ({ skip, limit, sortInfo, groupBy, filterValue }) => {
  return fetch(
    DATASET_URL +
      "?skip=" +
      skip +
      "&limit=" +
      limit +
      (groupBy && groupBy.length ? "&groupBy=" + groupBy : "") +
      "&sortInfo=" +
      JSON.stringify(sortInfo) +
      "&filterBy=" +
      JSON.stringify(filterValue)
  ).then((response) => {
    const totalCount = response.headers.get("X-Total-Count");
    return response.json().then((data) => {
      return { data, count: parseInt(totalCount) };
    });
  });
};

const MainTableGrid = ({ theme }) => {
  const [filterValue, setFilterValue] = useState(defaultFilterValue);
  const [sortInfo, setSortInfo] = useState([]);
  const dataSource = useCallback(loadData, []);

  return (
    <div>
      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        columns={columns}
        defaultFilterValue={defaultFilterValue}
        pagination
        checkboxColumn
        defaultSelected={{ 1: false }}
        defaultGroupBy={[]}
        editable={true}
        dataSource={dataSource}
        onSortInfoChange={setSortInfo}
        onFilterValueChange={setFilterValue}
        rowHeight={50}
      />
    </div>
  );
};

export default MainTableGrid;
