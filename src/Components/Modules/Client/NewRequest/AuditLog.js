import React from "react";

const AuditLog = () => {
  const tableData = [
    {
      name: "Start",
      owner: "Users",
      Duration: null,
      startDate: "23 jul 2022 11:01",
      endDate: "26 jul 2022",
      action: "Initiate Request",
    },
    {
      name: "Brief Upload",
      owner: "User2",
      Duration: "2",
      startDate: "23 jul 2022 11:01",
      endDate: "26 Jul 2022 11:01",
      action: "Brief Upload",
    },
    {
      name: null,
      owner: "Upload-Brief-0.1",
      Duration: "Brife-file.docx",
      startDate: null,
      endDate: "user2",
      action: "23 Jul 2022 11:01",
    },
    {
      name: null,
      owner: "Change data-Duration",
      Duration: "Old 2 days-now:3days",
      startDate: null,
      endDate: "user3	",
      action: "23 Jul 2022 11:01",
    },
    {
      name: "Artwork Upload",
      owner: "User2",
      Duration: "2",
      startDate: "23 Jul 2022 11:01",
      endDate: "26 Jul 2022 11:01	",
      action: "Artwork Upload",
    },
    {
      name: null,
      owner: "Upload - Artwork-0.1",
      Duration: "Mannage-Red-V1.pdf",
      startDate: null,
      endDate: "user3",
      action: "23 Jul 2022 11:01",
    },
    {
      name: "Artwork Approval",
      owner: "User2",
      Duration: "5",
      startDate: "23 Jul 2022 11:01	",
      endDate: "26 Jul 2022 11:01	",
      action: "Artwork Approved",
    },
    {
      name: "Print Proof Approval	",
      owner: "User4",
      Duration: "3",
      startDate: "23 Jul 2022 11:01",
      endDate: null,
      action: null,
    },
  ];
  return (
    <div className="mx-2 my-2">
      <table className="container border-slate-300 mx-auto table-auto rounded-lg">
        <thead className="bg-gray-200">
          <tr className="border border-slate-300">
            <th className="py-4 pl-3 text-left">Task Name</th>
            <th className="text-left">Task Owner</th>
            <th className="text-left pr-14">Duration</th>
            <th className="text-left pr-14">Start Date</th>
            <th className="text-left pr-14">End Date</th>
            <th className="text-left">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {tableData.map((tdata) => {
            return (
              <tr className="border text-slate-500 border-slate-300">
                {tdata.name != null && (
                  <td
                    className={`pl-3 text-black py-4  ${
                      tdata.name == "Print Proof Approval" ? "py-4" : ""
                    }${tdata.name == "Artwork Approval" ? "py-4" : ""}`}
                    rowspan={
                      tdata.name == "Brief Upload"
                        ? "3"
                        : "" || tdata.name == "Artwork Upload"
                        ? "2"
                        : ""
                    }
                  >
                    {tdata.name}
                  </td>
                )}
                <td
                  className={`text-slate-500 ${
                    tdata.name == "Brief Upload" ||
                    tdata.name == "Artwork Upload"
                      ? "py-3"
                      : ""
                  }`}
                  colspan={tdata.name == "Start" ? "2" : ""}
                >
                  {tdata.owner}
                </td>
                {tdata.Duration != null && (
                  <td
                    className={`${
                      tdata.owner == "Change data-Duration" ? "py-6" : ""
                    }${tdata.owner == "Upload-Brief-0.1" ? "py-4" : ""}${
                      tdata.owner == "Upload - Artwork-0.1" ? "py-4" : ""
                    }`}
                    colspan={
                      tdata.Duration == "Brife-file.docx"
                        ? "2"
                        : "" || tdata.Duration == "Old 2 days-now:3days"
                        ? "2"
                        : "" || tdata.Duration == "Mannage-Red-V1.pdf"
                        ? "2"
                        : ""
                    }
                  >
                    {tdata.Duration}
                  </td>
                )}
                {tdata.startDate != null && (
                  <td
                    className=""
                    colspan={tdata.name == "Print Proof Approval" ? "3" : ""}
                  >
                    {tdata.startDate}
                  </td>
                )}
                {tdata.endDate != null && <td className="">{tdata.endDate}</td>}
                {tdata.action != null && <td className="">{tdata.action}</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AuditLog;
