import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <>
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 min-h-full w-48 p-4">
        <li>
          <a href="/">Sidebar Item 1</a>
        </li>
        <li>
          <a href="/">Sidebar Item 2</a>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
