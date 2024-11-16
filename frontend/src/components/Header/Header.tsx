import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Header: React.FC = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar />
      </div>
      <div className="drawer-side">
        <Sidebar />
      </div>
    </div>
  );
};

export default Header;
