import {Box,Container,Typography} from "@mui/material";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.4
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 25,
        duration: 0.4
      }
    }
  };

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        background: "linear-gradient(135deg, #99E5E5 0%, #66D4D4 100%)",
        py: 8,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          pointerEvents: "none"
        }
      }}
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={titleVariants}>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom
              sx={{
                textAlign: "center",
                background: "linear-gradient(45deg, #006666, #004d4d)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px",
                  height: "4px",
                  background: "linear-gradient(45deg, #007BFF, #66D4D4)",
                  borderRadius: "2px"
                }
              }}
            >
              MY PROFILE
            </Typography>
          </motion.div>
          
          <motion.div variants={textVariants}>
            <Typography 
              variant="body1" 
              paragraph
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "#333",
                background: "rgba(255,255,255,0.7)",
                padding: 3,
                borderRadius: 2,
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                marginTop: 4
              }}
            >
              つっつと申します。主に業務ではPython, Djangoでやらせていただいているので、
              <br />
              Pythonをより深く知り、プロフェッショナルなPythonistになれるように日々取り組んでいます。
              <br />
              個人的なエンジニアとしてのビジョンとしては、フルスタックエンジニアとして活躍したいです。
              <br />
              将来的には、プレイングマネージャーを目指しています！
              <br />
              <br />
              現在は転職活動中です！
              <br />
              ご連絡の際はX（旧Twitter）のDMからよろしくお願いいたします！
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
