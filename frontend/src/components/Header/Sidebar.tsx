import React from "react";
import MenuItems from "./components/MenuItems";

const Sidebar: React.FC = () => {
  return (
    <>
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 min-h-full w-36 p-4">
        <div>
            Items
        </div>
        <MenuItems />
      </ul>
    </>
  );
};

export default Sidebar;
