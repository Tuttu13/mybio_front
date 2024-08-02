import {Box,Container,Typography} from "@mui/material";
import React from "react";

const About: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: "#99E5E5", // 背景色を #33C1C1 に設定
        py: 8,
      }}
    >
      <Container>
        <Typography variant="h3" component="h2" gutterBottom>
          MY PROFILE
        </Typography>
        <Typography variant="body1" paragraph>
          エンジニア3年目つっつと申します。エンジニア0年目からPython, Djangoでやらせていただいているので、
          <br />
          Pythonをより深く知り、プロフェッショナルなPythonistになれるように日々取り組んでいます。
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
