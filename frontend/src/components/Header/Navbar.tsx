import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-300 w-full">
      {/* タイトル */}
      <div className="flex-1 px-2">Navbar Title</div>

      {/* ドロワーボタン（小画面用） */}
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>

      {/* メニューと大画面用ドロワーボタン */}
      <div className="hidden flex-none lg:flex lg:justify-end">
        <ul className="menu menu-horizontal">
          <li>
            <a href="/">Navbar Item 1</a>
          </li>
          <li>
            <a href="/">Navbar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
