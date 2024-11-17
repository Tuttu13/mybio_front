import {motion} from "framer-motion";
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Header: React.FC = () => {
  // ヘッダー全体のフェードインアニメーション
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  // サイドバーのスライドインアニメーション
  const sidebarVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="drawer drawer-end sticky top-0"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }} // ヘッダー全体のアニメーション時間
    >
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      {/* ドロワーコンテンツ */}
      <div className="drawer-content flex flex-col">
        <Navbar />
        {/* メインコンテンツがあればここに追加 */}
      </div>

      {/* ドロワーサイド */}
      <motion.div
        className="drawer-side"
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.5 }} // サイドバーのアニメーション時間と遅延
      >
        <Sidebar />
      </motion.div>
    </motion.div>
  );
};

export default Header;
