import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = ({ children }) => {
  let activeStyle = {
    color: "green",
  };
  return (
    <div className=" fixed  flex  w-full   ">
      <div className="text-xl w-full flex flex-col text-center flex-[0.2] h-screen border-r-2 border-gray-200 py-10 ">
        <NavLink
          to="/dashboard"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="border-2 border-gray px-3 py-2  hover:shadow-md"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/candidate"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="border-2 border-gray px-3 py-2 hover:shadow-md"
        >
          Candidate
        </NavLink>
        <NavLink
          to="/election"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="border-2 border-gray px-3 py-2 hover:shadow-md"
        >
          Election
        </NavLink>
        <NavLink
          to="/voters"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="border-2 border-gray px-3 py-2 hover:shadow-md"
        >
          Voters
        </NavLink>
        <NavLink
          to="/reset"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="border-2 border-gray px-3 py-2 hover:shadow-md"
        >
          Reset
        </NavLink>
      </div>
      <div className="flex-[0.8] bg-gray-100 justify-center w-full">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
