import {Book,EventNote,GitHub,Twitter} from "@mui/icons-material";
import {Avatar,Box,Container,IconButton,Typography} from "@mui/material";
import React from "react";
import profileImage from "../assets/image.png";

const Home: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        backgroundColor: "#99F7F7",  // 背景色を #33B0B0 に設定
        marginTop: "64px",
      }}
    >
      <Container>
        <Avatar
          alt="Profile"
          src={profileImage}
          sx={{ width: 150, height: 150, marginBottom: 2 }}
        />
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to つっつ's Biography
        </Typography>
        <Typography variant="h5" component="p">
          Full Stack Developer | Pythonist
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "left", marginTop: 2 }}>
          <IconButton
            color="inherit"
            href="https://github.com/Tuttu13"
            target="_blank"
            rel="noopener"
          >
            <GitHub />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://x.com/_Tuttu13_IPA"
            target="_blank"
            rel="noopener"
          >
            <Twitter />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://note.com/stageoftheground"
            target="_blank"
            rel="noopener"
          >
            <Book />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://connpass.com/user/Tuttu13/"
            target="_blank"
            rel="noopener"
          >
            <EventNote />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
