import {Book,EventNote,GitHub,Twitter} from "@mui/icons-material";
import {Avatar,Box,Container,IconButton,Typography} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import profileImage from "../assets/image.png";

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const avatarVariants = {
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.5
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20,
        duration: 0.3
      }
    },
    hover: {
      scale: 1.1,
      rotate: 15,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Box
        id="home"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
          backgroundColor: "#99F7F7",
          marginTop: "64px",
          minHeight: "100vh",
          justifyContent: "center"
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <motion.div variants={avatarVariants}>
            <Avatar
              alt="Profile"
              src={profileImage}
              sx={{ width: 200, height: 200, marginBottom: 3, mx: "auto" }}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{
                background: "linear-gradient(45deg, #007BFF, #66D4D4)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700
              }}
            >
              Welcome to つっつ's Biography
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Typography 
              variant="h5" 
              component="p"
              sx={{
                marginBottom: 4,
                color: "#333",
                fontWeight: 300
              }}
            >
              Full Stack Developer | Pythonist
            </Typography>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            style={{ display: "flex", justifyContent: "center", gap: "16px" }}
          >
            <motion.div variants={iconVariants} whileHover="hover">
              <IconButton
                color="inherit"
                href="https://github.com/Tuttu13"
                target="_blank"
                rel="noopener"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.3)"
                  }
                }}
              >
                <GitHub sx={{ fontSize: 32 }} />
              </IconButton>
            </motion.div>
            
            <motion.div variants={iconVariants} whileHover="hover">
              <IconButton
                color="inherit"
                href="https://x.com/_Tuttu13_IPA"
                target="_blank"
                rel="noopener"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.3)"
                  }
                }}
              >
                <Twitter sx={{ fontSize: 32 }} />
              </IconButton>
            </motion.div>
            
            <motion.div variants={iconVariants} whileHover="hover">
              <IconButton
                color="inherit"
                href="https://note.com/stageoftheground"
                target="_blank"
                rel="noopener"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.3)"
                  }
                }}
              >
                <Book sx={{ fontSize: 32 }} />
              </IconButton>
            </motion.div>
            
            <motion.div variants={iconVariants} whileHover="hover">
              <IconButton
                color="inherit"
                href="https://connpass.com/user/Tuttu13/"
                target="_blank"
                rel="noopener"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.3)"
                  }
                }}
              >
                <EventNote sx={{ fontSize: 32 }} />
              </IconButton>
            </motion.div>
          </motion.div>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Home;
