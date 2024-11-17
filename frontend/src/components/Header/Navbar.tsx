// Navbar.tsx
import {motion} from "framer-motion";
import React from "react";

const Navbar: React.FC = () => {
  const menuItems = ["Home", "About", "Projects", "Works", "Skills", "Articles"];
  const title = "Tuttu";
  const titleLetters = title.split("");

  // 親コンテナのバリアント
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // 各子要素のアニメーション開始間隔
      },
    },
  };

  // 各文字のバリアント
  const letterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="navbar bg-base-300 w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* タイトル */}
      <motion.div
        className="flex-1 px-4 text-xl font-bold"
        variants={titleContainerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.0, delay: 0.6 }} // タイトル全体のアニメーション時間と遅延
      >
        {titleLetters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>

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
          {menuItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }} // メニューアイテムの遅延をタイトルのアニメーション後に設定
              whileHover={{ scale: 1.1, color: "#3b82f6" }} // ホバー時のアニメーション
              className="hover:text-primary"
            >
              <a href="/">{item}</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
