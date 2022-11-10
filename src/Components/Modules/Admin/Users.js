import React, { useState } from "react";

import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

import { MdOutlineModeEditOutline } from "react-icons/md";

import Popup from "reactjs-popup";
import { BsXLg } from "react-icons/bs";

const Users = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
    font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">General Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      First Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Last Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      City
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>

    // <div>
    //   <div className="  flex flex-row justify-between items-center p-4 pl-5 border border-t-0 border-x-0 shadow-md ">
    //     <div className="flex items-center">
    //       <FiUsers className="text-2xl mr-3" />

    //       <h1 className="text-2xl">Admin Users </h1>
    //     </div>
    //     <div className="flex">
    //       <MdNotifications className="text-2xl mr-4" />
    //       <BsFillQuestionCircleFill className="text-2xl" />
    //     </div>
    //   </div>

    //   <h1>Good </h1>
    //   <Popup
    //     modal
    //     trigger={
    //       <button type="button" className="trigger-button">
    //         Add New User
    //       </button>
    //     }
    //   >
    //     {(close) => (
    //       <div className="pop-up-bg">
    //         <div>
    //           <div className="pop-header">
    //             <h1 className="add-new-user-title">Add New User</h1>
    //             <MdOutlineModeEditOutline />
    //             <BsXLg onClick={() => close()} />
    //           </div>

    //           <div className="pop-up-fields">
    //             <label className="pop-up-label">Full Name</label>
    //             <input
    //               type="text"
    //               className="pop-up-input"
    //               placeholder="Enter User Name"
    //             />
    //           </div>
    //           <div className="pop-up-fields">
    //             <label className="pop-up-label">Email</label>
    //             <input
    //               type="text"
    //               className="pop-up-input"
    //               placeholder="Enter Email"
    //             />
    //           </div>
    //           <div className="drop-down-container">
    //             <div className="drop-down">
    //               <label className="pop-up-label">Department</label>

    //               <select className="drop-down-options">
    //                 <option>Option 1</option>
    //                 <option>Option 2</option>
    //                 <option>Option 3</option>
    //               </select>
    //             </div>
    //             <div className="drop-down">
    //               <label className="pop-up-label">Security</label>
    //               <select className="drop-down-options">
    //                 <option>Option 1</option>
    //                 <option>Option 2</option>
    //                 <option>Option 3</option>
    //               </select>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="pop-up-btns">
    //           <button
    //             type="button"
    //             className="pop-up-button"
    //             onClick={() => close()}
    //           >
    //             Close
    //           </button>
    //           <button type="button" className="pop-up-button create-btn">
    //             Create
    //           </button>
    //         </div>
    //       </div>
    //     )}
    //   </Popup>
    // </div>
  );
};

export default Users;
