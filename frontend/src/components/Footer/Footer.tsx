import {motion} from "framer-motion";
import React from "react";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="footer footer-center bg-base-200 text-base-content rounded p-7"
      initial={{ opacity: 0, y: 50 }} // 初期状態: 不透明度0、下から50px
      whileInView={{ opacity: 1, y: 1 }} // ビューに入ったら: 不透明度1、元の位置
      transition={{ duration: 0.5 }} // アニメーションの所要時間
      viewport={{ once: false, amount: 0.6 }} // 一度だけ、50%が見えたらアニメーション
    >
      <nav className="grid grid-flow-col gap-4">
        <a href="/" className="link link-hover">
          About us
        </a>
        <a href="/" className="link link-hover">
          Contact
        </a>
        <a href="/" className="link link-hover">
          Jobs
        </a>
        <a href="/" className="link link-hover">
          Press kit
        </a>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </motion.footer>
  );
};

export default Footer;
