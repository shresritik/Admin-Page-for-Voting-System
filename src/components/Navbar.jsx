import React from "react";
import { FcApproval } from "react-icons/fc";
const Navbar = () => {
  return (
    <div className="flex py-5 border-b-2 border-gray-200 items-center shadow-md justify-between px-5">
      <h1 className="text-2xl">On Chain voting System Admin</h1>
      <div className="flex text-2xl items-center space-x-2">
        <FcApproval />
        <h1>Verified</h1>
      </div>
    </div>
  );
};

export default Navbar;
