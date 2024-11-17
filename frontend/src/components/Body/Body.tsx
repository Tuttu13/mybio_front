import {motion} from "framer-motion";
import React from "react";
import aircraftImage from "../../assets/elevation.jpg";

const Body: React.FC = () => {
  // タイトルのテキスト
  const title = "Hello there";
  const titleLetters = title.split("");

  // 段落のテキスト
  const paragraph = "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.";
  const words = paragraph.split(" ");

  // タイトルのバリアント
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // 各子要素のアニメーション開始間隔
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
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

  // 段落のバリアント
  const paragraphContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // 各単語のアニメーション開始間隔
        delayChildren: 0.3, // 段落全体のアニメーション開始遅延
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <div
      className="hero min-h-[720px] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${aircraftImage})`,
      }}
    >
      {/* 背景オーバーレイが必要な場合はコメントを外してください */}
      {/* <div className="hero-overlay bg-opacity-60"></div> */}

      <div className="text-neutral-content text-center">
        <div className="max-w-md mx-auto p-2">
          {/* タイトル */}
          <motion.h1
            className="mb-24 text-5xl font-bold flex justify-center flex-wrap"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
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
          </motion.h1>

          {/* 段落 */}
          <motion.p
            className="mb-5 text-lg"
            variants={paragraphContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-1"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Body;
